from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Cart, Wishlist
from django.contrib.auth import get_user_model


@receiver(post_save, sender=get_user_model())
def create_cart_and_wishlist(sender, instance, created, **kwargs):
    if created:
        Cart.objects.create(user = instance)
        Wishlist.objects.create(user = instance)