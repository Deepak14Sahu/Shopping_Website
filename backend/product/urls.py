from django.urls import path
from .views import ProductsListView

urlpatterns = [
    path('list/', ProductsListView.as_view(), name="ProductList"),
  
    

]