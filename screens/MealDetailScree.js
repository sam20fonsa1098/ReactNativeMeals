import React from 'react'
import {StyleSheet, View, Text, Button, ScrollView, Image} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {MEALS} from '../data/dummy-data'
import CustomHeaderButton from '../components/HeaderButton'

import DefaultText from '../components/DefaulText'

const ListItem = props => {
    return(
        <View style = {styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
}

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('id');
    const selected = MEALS.find( meal => meal.id === mealId);
    
    return (
        <ScrollView>
            <Image source = {{uri: selected.imageUrl}} style = {styles.image}/>
            <View style = {styles.details}>
                <DefaultText>{selected.duration}</DefaultText>
                <DefaultText>{selected.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selected.affordabilty.toUpperCase()}</DefaultText>
            </View>
            <Text style = {styles.title}>Ingredients</Text>
           {selected.ingredients.map(ig => {
               return(
                <ListItem key = {ig}>{ig}</ListItem>
               );
           })}

            <Text style = {styles.title}>Steps</Text>
            {selected.steps.map(step => {
               return(
                <ListItem key = {step}>{step}</ListItem>
               );
           })}
        </ScrollView>
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
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen;