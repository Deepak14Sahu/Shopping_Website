from rest_framework import serializers
from .models import ProductList

class ProductsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductList
        fields = '__all__'