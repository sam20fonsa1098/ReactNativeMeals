import React from 'react'
import {StyleSheet, FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
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

CategoriesScreen.navigationOptions = (navData) =>{
    return {
        headerTitle: 'Meal Categories',
        headerLeft :  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
                        <Item title = "Menu" iconName = "ios-menu" onPress = {() => {
                            navData.navigation.toggleDrawer();
                        }}></Item>
                    </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen;