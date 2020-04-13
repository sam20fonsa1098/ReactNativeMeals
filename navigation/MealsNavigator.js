import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createDrawerNavigator} from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScree'

const MealsNavigator = createStackNavigator ({
    Categories  : {
        screen: CategoriesScreen
    },
    CategoryMeal: {
        screen: CategoryMealsScreen
    },
    MealDetail:{
        screen: MealDetailScreen
    }
});

export default createAppContainer(MealsNavigator);