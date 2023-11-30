from rest_framework import serializers
from .models import ProductList, Cart

class ProductsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductList
        fields = '__all__'
        
class CartSerializer(serializers.ModelSerializer):
    products = ProductsListSerializer(many=True, read_only =True)
    class Meta:
        model = Cart
        fields = ["products"]