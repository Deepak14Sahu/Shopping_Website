from django.contrib import admin
from .models import ProductList, Cart, CartProductEntries


class CartProductEntryInline(admin.TabularInline):
    model = CartProductEntries
    extra = 0
    readonly_fields = ['subtotal']
    exclude = ['price']
    def subtotal(self, obj):
        return "$" + str(obj.quantity * obj.products.price)


class CartAdmin(admin.ModelAdmin):
    inlines = [CartProductEntryInline]
    list_display = ['user','get_total_price']
    def get_total_price(self, obj):
        return obj.calculate_total_price()

    get_total_price.short_description = 'Total Price'
    
    
admin.site.register(ProductList)
admin.site.register(Cart, CartAdmin)