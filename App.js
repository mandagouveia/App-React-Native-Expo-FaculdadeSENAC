import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Amanda Ramos Caminha de Gouveia</Text>
      <Button title='Ir para o MEME'
      onPress={() => navigation.navigate('Imagem')}
      />
    </View>
  );
}

function ImageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Meme do Android Studio =D</Text>
      <Image source={{uri: 'https://preview.redd.it/g1ot0484k6821.png?auto=webp&s=7d2f668c659754f1722d92b01c4d7304cd75fa88'}}
       style={{width: 400, height: 400}} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Página de Amanda' }} />
        <Stack.Screen name="Imagem" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});