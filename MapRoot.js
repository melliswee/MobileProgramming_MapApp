import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailsView from './components/DetailsView';
import MapViewScreen from './components/MapViewScreen';

export default function MapRoot() {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="MapViewScreen">
        <Drawer.Screen name='MapViewScreen' component={ MapViewScreen } options={{ title: 'Map' }}/>
        <Drawer.Screen name='DetailsView' component={ DetailsView } options={{ title: 'Details' }}/>  
    </Drawer.Navigator>
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