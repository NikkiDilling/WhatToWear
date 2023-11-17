from django.urls import path
from . import views
urlpatterns = [
    path('ola/', views.wardrobe_items, name='wardrobe_items')
]
