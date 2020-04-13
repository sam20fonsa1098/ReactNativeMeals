import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const CategoriesScreen = (props) => {
    return (
        <View style = {styles.screen}>
            <Text>This is the categoriesScreen</Text>
            <Button title = "Go to Meals" onPress = {() => {
                props.navigation.navigate({routeName: 'CategoryMeal'});
            }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen;