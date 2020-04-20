import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

import {CATEGORIES} from '../data/dummy-data'

const CategoryMealScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId');
    const selected = CATEGORIES.find( cat => cat.id === categoryId);
    return (
        <View style = {styles.screen}>
            <Text>{selected.title}</Text>
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

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find( cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen;