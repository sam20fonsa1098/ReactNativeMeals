import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const CategoryMealScreen = (props) => {
    return (
        <View style = {styles.screen}>
            <Text>This is the categoriesScreen</Text>
            <Button title = "Go to Details" onPress = {() => {
                props.navigation.navigate({routeName: 'MealDetail'});
            }}></Button>
            {/* It is possible to back with another solutions */}
            {/* So, how works with stack, it possible to use the pop
            method as well */}
            <Button title = "Go Back" onPress = {() => {
                // props.navigation.goBack();
                props.navigation.pop();
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

export default CategoryMealScreen;