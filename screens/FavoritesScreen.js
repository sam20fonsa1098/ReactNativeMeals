import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList'

import Colors from '../constants/Colors';

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if(favMeals.length === 0 || !favMeals) {
        return( 
            <View style = {styles.content}>
                <Text>No favorite meals found. Start adding some!</Text>
            </View>
        );
    }

    return (
        <MealList listData = {favMeals} navigation = {props.navigation}/>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

FavoritesScreen.navigationOptions = navData =>{
    return {
        headerTitle: "Your Favorites",
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.accentColor : 'white',
        },
        headerLeft :  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
                        <Item title = "Menu" iconName = "ios-menu" onPress = {() => {
                            navData.navigation.toggleDrawer();
                        }}></Item>
                    </HeaderButtons>
    }
}

export default FavoritesScreen;