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

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    products = models.ManyToManyField(ProductList)
    
    def __str__(self):
        return self.user.name + str(self.products.count())