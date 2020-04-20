import React from 'react'
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Platform} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile'



const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile title = {itemData.item.title}
                              onSelect = {() => {
                                props.navigation.navigate({routeName: 'CategoryMeal', params : {
                                    categoryId: itemData.item.id
                                }});
                              }}
                              color = {itemData.item.color}>

            </CategoryGridTile>
        );
    }

    return (
        <FlatList keyExtractor = {(item, index) => item.id}
                  data         = {CATEGORIES}
                  renderItem   = {(item) => renderGridItem(item)} 
                  numColumns   = {2}>
        </FlatList>
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen;