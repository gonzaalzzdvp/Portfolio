from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import register, login, profile, logout

urlpatterns = [
    path('register/', register),
    path('login/', login),
    path('logout/', logout),
    path('profile/', profile),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
