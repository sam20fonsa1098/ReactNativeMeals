import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {MEALS} from '../data/dummy-data'
import CustomHeaderButton from '../components/HeaderButton'

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('id');
    const selected = MEALS.find( meal => meal.id === mealId);
    
    return (
        <View style = {styles.screen}>
            <Text>{selected.title}</Text>
            <Button title = "Go Back to Categories" onPress = {() => {
                //Ìt is possible to back to the top to the stack
                props.navigation.popToTop();
            }}></Button>
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    
    const mealId = navigationData.navigation.getParam('id');
    const selected = MEALS.find( meal => meal.id === mealId);
    return {
        headerTitle: selected.title,
        headerRight: 
            <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}> 
                <Item title = "Favorite" 
                      iconName = 'ios-star'
                      onPress = {() => {console.log("worked")}}/> 
            </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen;