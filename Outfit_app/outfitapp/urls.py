from django.urls import path
from . import views
urlpatterns = [
    path('wardrobe/', views.get_data, name='wardrobe_get'),
    path('getPrediction/', views.receive_data, name='wardrobe_post'),
    path('savePrediction/', views.save_data, name='wardrobe_put')
    
]
