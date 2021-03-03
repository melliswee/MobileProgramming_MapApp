import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import HistoryView from './HistoryView';

export default function CalculatorView({navigation}) {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const calcSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
    setHistory([...history, {key: `${num1} + ${num2} = ${sum}`}]);
  }

  const calcSub = () => {
    const sub = parseFloat(num1) - parseFloat(num2);
    setResult(sub);
    setHistory([...history, {key: `${num1} - ${num2} = ${sub}`}]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Result: {result.toFixed(2)} </Text>
        <TextInput 
          keyboardType= 'numeric'
          style = {styles.inputfield}
          onChangeText={num1 => setNum1(num1)}
          value={String(num1)}
        />
        <TextInput 
          keyboardType= 'numeric'
          style = {styles.inputfield}
          onChangeText={num2 => setNum2(num2)}
          value={String(num2)}
        />
      </View>
      <View style={styles.buttoncontainer}>
        <Button onPress={calcSum} title=' + '/>
        <Button onPress={calcSub} title=' - '/>
        <Button
          title="History"
          onPress={() => navigation.navigate('HistoryView', {history: history  })}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputfield: {
    fontSize: 18,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttoncontainer: {
    flex: 1,
    width: 300,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
  },
  listcontainer: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  }
});