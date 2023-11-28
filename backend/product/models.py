from django.db import models

class ProductList(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10 ,decimal_places=2)
    image = models.URLField(blank=True)
    
    def __str__(self):
        return self.name

