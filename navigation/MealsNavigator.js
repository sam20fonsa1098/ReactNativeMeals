import {Platform} from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createDrawerNavigator} from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScree'

import Colors from '../constants/Colors'

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
        screen: MealDetailScreen
    }
}, {defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}});

export default createAppContainer(MealsNavigator);