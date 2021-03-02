import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function DetailsView({navigation}) {

    const handleClose = () => {
        //navigation.closeDrawer();
        navigation.navigate('MapViewScreen');
    }

  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button onPress={ () =>  { handleClose() } } title="Go back to map" />
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