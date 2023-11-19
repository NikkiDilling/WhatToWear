import numpy as np
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Wardrobe
from .models import OutfitsRecords
from django.http import JsonResponse
from sklearn.ensemble import RandomForestClassifier
from sklearn.multioutput import MultiOutputClassifier
import pandas as pd
from datetime import date
from rest_framework.decorators import api_view


# Endpoint for retrieving data from the database
@api_view(['GET'])
def get_data(request):
    data = Wardrobe.objects.all().values()
    print(data)
    return JsonResponse(list(data), safe=False)


# Endpoint for receiving user data for prediction
@api_view(['POST'])
def receive_data(request):
    """
    requires sending data in a json format of a form:
    {
    "temp_max": "20",
    "temp_min": "7",
    "precipitation":"0.2",
    "activity": "Relax",
    "mood":"2"
    }
    """
    user_data = request.data
    new_label = {"activity": {"Work": 0, "Relax": 1, 'Outside': 2, 'University': 3, 'Friends': 4}}

    user_input_list = [int(user_data['temp_max']), int(user_data['temp_min']), user_data['precipitation'],
                       new_label["activity"][user_data['activity']], int(user_data['mood'])]
    print(user_input_list)
    user_input = pd.DataFrame(columns=['temp_max', 'temp_min', 'precipitation', 'activity', 'mood'])
    user_input.loc[len(user_input.index)] = user_input_list
    user_input = user_input.to_numpy()

    training_data_json = OutfitsRecords.objects.all().values()
    training_data = pd.DataFrame(list(training_data_json))
    training_data.replace(new_label, inplace=True)
    forest = MultiOutputClassifier(RandomForestClassifier())
    X = training_data[['outside_temp_max', 'outside_temp_min', 'precipitation', 'activity', 'mood']].to_numpy()
    y = training_data[['top_id', 'bottoms_id', 'shoes_id', 'outerwear_id', 'coat_id']].to_numpy()
    try:
        forest.fit(X, y)
    except Exception as e:
        print(e)

    try:
        suggestion = forest.predict(user_input)
    except Exception as e:
        print(e)

    suggestion_json = {"top": str(suggestion[0, 0]), "bottoms": str(suggestion[0, 1]), "shoes": str(suggestion[0, 2]),
                       "outerwear": str(suggestion[0, 3]), "coat": str(suggestion[0, 4])}

    return JsonResponse(suggestion_json, safe=False)


# Endpoint for saving user's satisfaction with the prediction/prediction
@api_view(['PUT'])
def save_data(request):
    """
    requires sending data in a json format of a form:
    {
    "top":"1",
    "bottoms": "10",
    "shoes": "24",
    "outerwear": "28",
    "coat": "40",
    "max_temp": "20",
    "min_temp": "5",
    "precipitation": "1.7",
    "activity": "Relax",
    "mood": "2",
    "average_temp":"14"
    }
    """
    user_data = request.data
    print(user_data)
    date_today = date.today().strftime('%Y-%m-%d')
    top = Wardrobe.objects.get(id=user_data['top'])
    bottoms = Wardrobe.objects.get(id=user_data['bottoms'])
    shoes = Wardrobe.objects.get(id=user_data['shoes'])
    outerwear = Wardrobe.objects.get(id=user_data['outerwear'])
    coat = Wardrobe.objects.get(id=user_data['coat'])

    # saving the prediction into records to improve further predictions
    record = OutfitsRecords(date=date_today, top=top, bottoms=bottoms, shoes=shoes,
                            outerwear=outerwear, coat=coat, outside_temp_max=user_data['max_temp'],
                            outside_temp_min=user_data['min_temp'], precipitation=user_data['precipitation'],
                            activity=user_data['activity'], mood=user_data['mood'], average_temp=user_data['average_temp'])
    record.save()
    return HttpResponse(status=200)
