from django.contrib import admin

from .models import IceCreamStand, IceCream, Parent, Child

admin.site.register(IceCreamStand)
admin.site.register(IceCream)
admin.site.register(Parent)
admin.site.register(Child)
