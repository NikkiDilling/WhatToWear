from django.urls import path
from . import views
urlpatterns = [
    path('ola/', views.wardrobe_items, name='wardrobe_items'),
    path('wardrobe/', views.get_data, name='wardrobe_get'),
    path('getPrediction/', views.recieve_data, name='wardrobe_post')
    
]
