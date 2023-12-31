from django.db import models
from django.contrib.auth import get_user_model

User= get_user_model()

class ProductList(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10 ,decimal_places=2)
    image = models.URLField(blank=True)
    
    def __str__(self):
        return self.name

class CartProductEntries(models.Model):
    cart = models.ForeignKey('Cart', related_name="cart", on_delete=models.CASCADE)
    products = models.ForeignKey('ProductList', related_name="productlist", on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=1)
    price = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['cart', 'products'], name='unique_cart_product')
        ]

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    products = models.ManyToManyField('ProductList', through='CartProductEntries')
    def calculate_total_price(self):
        total = sum(product.price for product in self.products.all())
        return total

    def __str__(self):
        return f"{self.user.name}'s Cart"


class WishlistProductEntries(models.Model):
    wishlist = models.ForeignKey('wishlist', related_name="wishlist", on_delete=models.CASCADE)
    products = models.ForeignKey('ProductList', related_name="whislistproductlist", on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=4, decimal_places=2, blank=True, null=True)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['wishlist', 'products'], name='unique_wishlist_product')
        ]

class Wishlist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    products = models.ManyToManyField('ProductList', through='wishlistproductentries')

    def __str__(self):
        return f"{self.user.name}'s Wishlist"

