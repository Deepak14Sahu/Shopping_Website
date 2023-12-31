# Generated by Django 4.2.7 on 2023-12-01 11:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_cart'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='products',
        ),
        migrations.CreateModel(
            name='CartProductEntries',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveSmallIntegerField(default=1)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=4, null=True)),
                ('cart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cart', to='product.cart')),
                ('products', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='productlist', to='product.productlist')),
            ],
        ),
    ]
