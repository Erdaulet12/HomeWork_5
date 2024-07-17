from django.db import models

# Create your models here.


class IceCreamStand(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class IceCream(models.Model):
    flavor = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    stand = models.ForeignKey(
        IceCreamStand, related_name='ice_creams', on_delete=models.CASCADE)

    def __str__(self):
        return self.flavor
