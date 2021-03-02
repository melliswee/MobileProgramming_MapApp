import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import DetailsView from './DetailsView';

export default function MapViewScreen({navigation}) {

  const [locationFound, setLocationFound] = useState(false);
  const [msg, setMsg] = useState('Searching location...');
  const [location, setLocation] = useState(null);
  //const [latitude, setLatitude] = useState(null);
  //const [longitude, setLongitude] = useState(null);
  const [markerTitle, setMarkerTitle] = useState('You are here');

  useEffect(() => {
    getLocation();
  }, [])

  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('No permission to access location');
      setMsg('Unable to show map')
    } else {
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      //setLatitude(currentLocation.coords.latitude);
      //setLongitude(currentLocation.coords.longitude);
      setLocationFound(true);
    }
  }

  return (
    <View style={styles.container}>
        {locationFound ?
        <MapView
            style={styles.map}
            region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,
        }} >

        <Marker
            coordinate={{
            latitude: location.coords.latitude, 
            longitude: location.coords.longitude
            }}
            title= {markerTitle} 
        />
        </MapView>
        :
        <Text> { msg } </Text>
        }
        <Button
            style = {styles.button}
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
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  map: {
      flex: 5,
      ...StyleSheet.absoluteFillObject,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});