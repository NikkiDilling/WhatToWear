import outfitapp.models as models
import pandas as pd
import math
wardrobe = pd.read_csv('wardrobe.csv', sep='\t')
outfits_records = pd.read_csv('outfits_records.csv', sep=';')
print(outfits_records)
print(outfits_records.columns)
for index, row in wardrobe.iterrows():
    item = models.Wardrobe(type=row['Type'], description=row['Description'], colour=row['Colour'],
                           material=row['Material'], warmth_level=row['Warmth level'],
                           comfort_level=row['Comfort level'], formal_level=row['Formal level'],
                           last_date_used=row['Last date used'])
    # item.save()

for index, row in outfits_records.iterrows():

    top = models.Wardrobe.objects.get(id=row['Top'])
    bottoms = models.Wardrobe.objects.get(id=row['Bottoms'])
    shoes = models.Wardrobe.objects.get(id=row['Shoes'])
    if math.isnan(row['Outerwear']):
        outerwear = None
    else:
        outerwear = models.Wardrobe.objects.get(id=row['Outerwear'])
    if math.isnan(row['Coat']):
        coat = None
    else:
        coat = models.Wardrobe.objects.get(id=row['Coat'])

    record = models.OutfitsRecords(date=row['Date'], top=top, bottoms=bottoms, shoes=shoes,
                                   outerwear=outerwear, coat=coat, outside_temp_max=row['Max temp'],
                                   outside_temp_min=row['Min temp'], precipitation=row['Precipitation'],
                                   wind_speed=row['Wind speed'], activity=row['Activity'], mood=row['Mood'])
    # record.save()



