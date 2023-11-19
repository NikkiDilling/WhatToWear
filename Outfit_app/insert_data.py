import outfitapp.models as models
import pandas as pd
from datetime import datetime
import math
wardrobe = pd.read_csv('wardrobe2.csv')
outfits_records = pd.read_csv('cooked data.csv')
outfits_records[['Top','Bottoms','Shoes','Jumper','Coat']] = outfits_records[['Top','Bottoms','Shoes','Jumper','Coat']] +1
print(outfits_records)
for index, row in wardrobe.iterrows():
    item = models.Wardrobe(type=row['Type'], description=row['Description'],
                            warmth_level=row['Warmth'],
                           comfort_level=row['Comfort'], formal_level=row['Formal'])
    #item.save()

for index, row in outfits_records.iterrows():
    date_format = '%d/%m/%Y'
    date = datetime.strptime(row['Date'], date_format).strftime('%Y-%m-%d')
    top = models.Wardrobe.objects.get(id=row['Top'])
    bottoms = models.Wardrobe.objects.get(id=row['Bottoms'])
    shoes = models.Wardrobe.objects.get(id=row['Shoes'])
    if math.isnan(row['Jumper']):
        outerwear = None
    else:
        outerwear = models.Wardrobe.objects.get(id=row['Jumper'])
    if math.isnan(row['Coat']):
        coat = None
    else:
        coat = models.Wardrobe.objects.get(id=row['Coat'])

    record = models.OutfitsRecords(date=date, top=top, bottoms=bottoms, shoes=shoes,
                                   outerwear=outerwear, coat=coat, outside_temp_max=row['Max temp'],
                                   outside_temp_min=row['Min temp'], precipitation=row['Precipitation'],
                                    activity=row['Activity'], mood=row['Mood'], average_temp=row['Average temp'])
    record.save()



