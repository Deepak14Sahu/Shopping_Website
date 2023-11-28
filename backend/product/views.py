from rest_framework import generics
from .serializers import ProductsListSerializer
from .models import ProductList

class ProductsListView(generics.ListCreateAPIView):
    queryset = ProductList.objects.all()
    serializer_class = ProductsListSerializer
    
