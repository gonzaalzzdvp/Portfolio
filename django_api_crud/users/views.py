from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenRefreshView

from .serializers import RegisterSerializer

# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "Usuario creado correctamente"},
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return JsonResponse({'error': 'Credenciales inválidas'}, status=401)

    user = authenticate(username=user.username, password=password)
    if not user:
        return JsonResponse({'error': 'Credenciales inválidas'}, status=401)

    refresh = RefreshToken.for_user(user)

    response = JsonResponse({'message': 'Login successful'})

    # 🍪 Cookies
    response.set_cookie(
        key='access',
        value=str(refresh.access_token),
        httponly=True,
        samesite='Lax',
        secure=False  
    )

    response.set_cookie(
        key='refresh',
        value=str(refresh),
        httponly=True,
        samesite='Lax',
        secure=False  
    )

    return response


@api_view(['POST'])
@permission_classes([AllowAny])
@authentication_classes([])
def logout(request):
    refresh_token = request.COOKIES.get('refresh')

    if refresh_token:
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
        except:
            pass

    response = JsonResponse({'message': 'Logout'})
    response.delete_cookie('access')
    response.delete_cookie('refresh')
    return response


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile(request):
    return JsonResponse({
        'id': request.user.id,
        'username': request.user.username,
        'email': request.user.email,
    })

class CookieTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get('refresh')

        if not refresh_token:
            return JsonResponse({'error': 'No refresh'}, status=401)

        request.data['refresh'] = refresh_token

        try:
            response = super().post(request, *args, **kwargs)
        except:
            response = JsonResponse({'error': 'Refresh expirado'}, status=401)
            response.delete_cookie('access')
            response.delete_cookie('refresh')
            return response

        if response.status_code == 200:
            response.set_cookie(
                'access',
                response.data['access'],
                httponly=True,
                samesite='Lax',
            )
            response.data = {'message': 'Token refrescado'}

        return response
