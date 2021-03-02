import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import DetailsView from './DetailsView';

export default function MapView({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Map comes here!</Text>
      <Button
        title="DetailsView"
        onPress={() => navigation.openDrawer('DetailsView')}
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