from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Wardrobe
from .models import OutfitsRecords


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
