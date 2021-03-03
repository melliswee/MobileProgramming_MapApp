import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function HistoryView({ route }) {
  const { history } = route.params;
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20}}>History</Text>
        <FlatList
          data={history}
          renderItem={({item}) => <Text style={{fontSize: 18}}>{item.key}</Text>}
          keyExtractor={((item, index) => index.toString())}
        />
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