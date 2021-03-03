import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeView from './components/HomeView';
import CalcRoot from './CalcRoot';
import MapRoot from './MapRoot';
import RecipeView from './components/RecipeView';

export default function App() {
  
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
  
      if (route.name === 'HomeView') {
        iconName = 'md-home';
      } else if (route.name === 'CalcRoot') {
        iconName = 'md-calculator';
      } else if (route.name === 'MapRoot') {
        iconName = 'md-map';
      } else if (route.name === 'RecipeView') {
        iconName = 'md-search'
      }
  
      return <Ionicons name={iconName} size={size} color={color} />;
    }
  });

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions = { screenOptions }>
        <Tab.Screen name='CalcRoot' component={ CalcRoot } options={{ title: 'Calculator' }}/>
        <Tab.Screen name='MapRoot' component={ MapRoot } options={{ title: 'Map' }}/>
        <Tab.Screen name='RecipeView' component={ RecipeView } options={{ title: 'Recipe' }}/>
        <Tab.Screen name='HomeView' component={ HomeView } options={{ title: 'My home' }}/>
      </Tab.Navigator>
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
