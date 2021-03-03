import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Image, TextInput, Button } from 'react-native';

//tulee nappia painaessa virhe että "value for message cannot be cast from ReadableNativeMap to String"
export default function RecipeView () {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);

    const getRecipes = () => {
            //Alert.alert('Haetaan reseptejä');
            let response = fetch(`http://www.recipepuppy.com/about/api/i=${ingredients}`)
            //.then(console.log('haettu'))
            .then(response => response.json())
            //.then(console.log('Response was ' + response))
            .then(responseJson => setRecipes(responseJson.results))
            .catch((error) => {
                Alert.alert('Error', error.message);
            });
    }

    const listSeparator = () => {
        return (
            <View 
                style={{
                    height: 1,
                    width: "80%",
                    backgroundColor: '#CED0CE',
                    marginLeft: "10%"
                }}
            />
        );
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                style={{marginLeft: "5%"}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) =>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18}}>{ item.title }</Text>
                    <Image 
                        style={{width: 66, height: 58}}
                        source={{uri: item.thumbnail}}
                    />
                </View>}
                data = { recipes }
                ItemSeparatorComponent={listSeparator}
            />
            <TextInput 
                style={{fontSize: 18, width: 200}}
                placeholder='ingredients'
                onChangeText={ingredients => setIngredients(ingredients)}
                
            />
            <Button title='Find' onPress={getRecipes}/>
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