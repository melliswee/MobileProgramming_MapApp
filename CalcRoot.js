import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryView from './components/HistoryView';
import CalculatorView from "./components/CalculatorView";

export default function CalcRoot() {
  
  const Stack = createStackNavigator();

  return (
    
      <Stack.Navigator>
        <Stack.Screen name='CalculatorView' component={ CalculatorView } options={{ title: 'Calculator' }}/>
        <Stack.Screen name='HistoryView' component={ HistoryView } options={{ title: 'Calculator history' }}/>
      </Stack.Navigator>
    
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