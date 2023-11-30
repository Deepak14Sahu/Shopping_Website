from rest_framework import generics
from .serializers import ProductsListSerializer, CartSerializer
from .models import ProductList, Cart
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
class ProductsListView(generics.ListCreateAPIView):
    queryset = ProductList.objects.all()
    serializer_class = ProductsListSerializer
    
class ProductDetailView(generics.RetrieveAPIView):
    queryset = ProductList.objects.all()
    serializer_class = ProductsListSerializer
    lookup_field = 'pk'
    
class ListCart(generics.RetrieveUpdateAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]
    def get_object(self):
        return Cart.objects.get(user=self.request.user) 
    
    def retrieve(self, request, *args, **kwargs):
        cart = self.get_object()
        serializer = self.get_serializer(cart)
        return Response(serializer.data)
    
    def update(self, request, *args, **kwargs):
        cart = self.get_object()
        product_pk = kwargs.get('pk') 
        product = get_object_or_404(ProductList, pk=product_pk)
        action = kwargs.get('action')
        if action == 'add':
            cart.products.add(product)
        elif action == 'remove':
            cart.products.remove(product)
        serializer = self.get_serializer(cart)
        return Response(serializer.data)
     
        
    
    