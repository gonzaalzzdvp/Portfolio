from django.urls import path
from .views import register, login, profile, logout

urlpatterns = [
    path('register/', register),
    path('login/', login),
    path('logout/', logout),
    path('profile/', profile),
]
