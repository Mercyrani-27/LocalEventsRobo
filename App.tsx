import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import LocationDetailsScreen from './src/LocationMap';
import MoviesScreen from './src/Movie';
import LoginScreen from './src/Login';
import MapScreen from './src/Map';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="LocationDetails" component={LocationDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;