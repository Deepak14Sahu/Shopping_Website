from rest_framework import serializers
from .models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =  ['name', 'email', 'password']
        
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.name
        return token