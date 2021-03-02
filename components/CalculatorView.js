import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HistoryView from './HistoryView';

export default function CalculatorView({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Calculator View!</Text>
      <Button
        title="HistoryView"
        onPress={() => navigation.navigate('HistoryView')}
      />
      <StatusBar style="auto" />
    </View>
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