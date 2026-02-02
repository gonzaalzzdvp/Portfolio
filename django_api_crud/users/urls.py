from django.urls import path
from .views import login, logout, profile, register, CookieTokenRefreshView

urlpatterns = [
    path('register/', register),
    path('login/', login),
    path('logout/', logout),
    path('profile/', profile),
    path('refresh/', CookieTokenRefreshView.as_view()),
]
