from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Wardrobe
from .models import OutfitsRecords
from django.http import JsonResponse
from sklearn.ensemble import RandomForestClassifier
from sklearn.multioutput import MultiOutputClassifier
import pandas as pd

from rest_framework.decorators import api_view


#Endpoint for retrieving data from the database
@api_view(['GET'])
def get_data(request):
    data = Wardrobe.objects.all().values()
    print(data)
    return JsonResponse(list(data), safe=False)

#Endpoint for recieving user data for prediction
@api_view(['POST'])
def recieve_data(request):
    user_data = request.data
    #print(user_data)

    training_data_json = OutfitsRecords.objects.all().values()
    print("json: " , training_data_json)
    
    training_data = pd.read_json(training_data_json, orient = 'records')
    print("converted: " , training_data)
    
    # Making prediction
    """ forest = MultiOutputClassifier(RandomForestClassifier())
    X = pd.DataFrame(training_data, columns=['Average temp', 'Activity', 'Mood']).to_numpy()
    y = pd.DataFrame(training_data, columns=['Top', 'Bottoms', 'Shoes', 'Jumper', 'Coat']).to_numpy()
    forest.fit(X, y)
    suggestion = forest.predict(user_input) """

    # returning prediction - JsonResponse(userData/prediction, safe=False)
    return JsonResponse(user_data, safe=False)


#Endpoint for saving user's satisfaction with the prediction/prediction
@api_view(['PUT'])
def save_data(request):
    userData = request.data
    print(userData)
    #saving the prediction into records to improve further predictions

    #returning nothing 


def wardrobe_items(request):
    items = Wardrobe.objects.all().values()
    template = loader.get_template('wardrobe.html')
    context = {
        'items': items,
    }
    return HttpResponse(template.render(context, request))


def make_prediction(request):
    template = loader.get_template('first.html')
    outfits_records = OutfitsRecords.objects.all().values()
    context = {}
    return HttpResponse(template.render(context, request))
