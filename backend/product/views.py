from rest_framework import generics, viewsets
from .serializers import ProductsListSerializer, CartSerializer
from .models import ProductList, Cart
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
class ProductsListView(generics.ListCreateAPIView):
    queryset = ProductList.objects.all()
    serializer_class = ProductsListSerializer
    
class ProductDetailView(generics.RetrieveAPIView):
    queryset = ProductList.objects.all()
    serializer_class = ProductsListSerializer
    lookup_field = 'pk'
    
class ListCart(generics.RetrieveAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]
    def get_object(self):
        print(self.request.user)
        return Cart.objects.get(user=self.request.user) 
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
     
        
    
    