import React from 'react'
import {StyleSheet, View, Text, Button, FlatList} from 'react-native'

import {CATEGORIES, MEALS} from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId');
    const selected = CATEGORIES.find( cat => cat.id === categoryId);

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );



    const renderMealItem = (item) => {
        return (
            <MealItem   title         = {item.item.title} 
                        onSelectMeal  = {() => {props.navigation.navigate({routeName: 'MealDetail', params: {
                            id: item.item.id
                        }})}} 
                        duration      = {item.item.duration}
                        affordabilty  = {item.item.affordabilty}
                        complexity    = {item.item.complexity}
                        image         = {item.item.imageUrl}></MealItem>
        );
    }

    return (
        <View style = {styles.screen}>
            <FlatList data         = {displayedMeals}
                      keyExtractor = {(item, index) => item.id}
                      renderItem   = {renderMealItem}
                      style        = {{width: '100%'}}>
            </FlatList>
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