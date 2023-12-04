from django.urls import path
from .views import ProductsListView, ProductDetailView, ListCart, ListWislist

urlpatterns = [
    path('list/', ProductsListView.as_view(), name="ProductList"),
    path('list/<int:pk>/', ProductDetailView.as_view(), name="ProductDetail"),
    path('cart/', ListCart.as_view(), name="CartViewSet"),
    path('cart/<int:pk>/<str:action>/', ListCart.as_view(), name="CartViewSet"),
    path('wishlist/', ListWislist.as_view(), name="WishlistViewSet"),
    path('wishlist/<int:pk>/<str:action>/', ListWislist.as_view(), name="WishlistViewSet"),
]