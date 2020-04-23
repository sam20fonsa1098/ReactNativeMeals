import React from 'react'
import {Text} from 'react-native'
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createDrawerNavigator} from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScree'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

import Colors from '../constants/Colors'

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    }
}

const MealsNavigator = createStackNavigator ({
    Categories  : {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories',
        }
    },
    CategoryMeal: {
        screen: CategoryMealsScreen,
    },
    MealDetail:{
        screen: MealDetailScreen,

    }
}, {
    defaultNavigationOptions : defaultStackNavOptions
});

const FavNaigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions : defaultStackNavOptions
})


const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name = "ios-restaurant" size = {25} color = {tabInfo.tintColor}></Ionicons>
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style = {{fontFamily: 'open-sans-bold'}}>Meals</Text> : Meals
    }},
    Favorites: {screen: FavNaigator, navigationOptions: {
        tabBarLabel: "Favorites",
        tabBarIcon: (tabInfo) => {
            return <Ionicons name = "ios-star" size = {25} color = {tabInfo.tintColor}></Ionicons>
        },
        tabBarColor: Colors.accentColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style = {{fontFamily: 'open-sans-bold'}}>Meals</Text> : Meals
    }}
}

/**
 * Way to combine multiple navigations
 */
const MealsFavTabNavigator = Platform.OS === 'android' ? 
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    }) 
    
    
    :createBottomTabNavigator(
        tabScreenConfig,{
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans'
            },
            activeTintColor: 'white',
        }
    });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions : defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen:MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals"
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator);