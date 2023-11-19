# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Wardrobe(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    type = models.CharField(db_column='Type', max_length=50, blank=True, null=True)  # Field name made lowercase.
    description = models.CharField(db_column='Description', max_length=100, blank=True, null=True)  # Field name made lowercase.
    warmth_level = models.SmallIntegerField(db_column='Warmth_level', blank=True, null=True)  # Field name made lowercase.
    comfort_level = models.SmallIntegerField(db_column='Comfort_level', blank=True, null=True)  # Field name made lowercase.
    formal_level = models.SmallIntegerField(db_column='Formal_level', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'wardrobe'


class OutfitsRecords(models.Model):
    date = models.DateField(db_column='Date', primary_key=True)  # Field name made lowercase.
    top = models.ForeignKey(Wardrobe, models.DO_NOTHING, db_column='Top', blank=True, null=True)  # Field name made lowercase.
    bottoms = models.ForeignKey(Wardrobe, models.DO_NOTHING, db_column='Bottoms', related_name='outfitsrecords_bottoms_set', blank=True, null=True)  # Field name made lowercase.
    shoes = models.ForeignKey(Wardrobe, models.DO_NOTHING, db_column='Shoes', related_name='outfitsrecords_shoes_set', blank=True, null=True)  # Field name made lowercase.
    outerwear = models.ForeignKey(Wardrobe, models.DO_NOTHING, db_column='Outerwear', related_name='outfitsrecords_outerwear_set', blank=True, null=True)  # Field name made lowercase.
    coat = models.ForeignKey(Wardrobe, models.DO_NOTHING, db_column='Coat', related_name='outfitsrecords_coat_set', blank=True, null=True)  # Field name made lowercase.
    outside_temp_max = models.FloatField(db_column='Outside_temp_max', blank=True, null=True)  # Field name made lowercase.
    outside_temp_min = models.FloatField(db_column='Outside_temp_min', blank=True, null=True)  # Field name made lowercase.
    average_temp = models.FloatField(db_column='Average_temp', blank=True, null=True)
    precipitation = models.FloatField(db_column='Precipitation', blank=True, null=True)  # Field name made lowercase.
    activity = models.CharField(db_column='Activity', max_length=50, blank=True, null=True)  # Field name made lowercase.
    mood = models.IntegerField(db_column='Mood', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'outfits_records'
