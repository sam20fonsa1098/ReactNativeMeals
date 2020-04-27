import React, {useCallback, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaulText'
import {toggleFavorite} from '../store/actions/meals'

const ListItem = props => {
    return(
        <View style = {styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
}

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('id');

    const availableMeals = useSelector(state => state.meals.meals)
    const currentFavMeals = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))

    const selected = availableMeals.find( meal => meal.id === mealId);
    //This generate a loop, useEffect will fix this
    // props.navigation.setParams({mealTitle: selected.title});
    /**
     * But not the best way
     *  useEffect(() => {
            props.navigation.setParams({mealTitle: selected.title});
        }, [selected])
     */

    const dispatch = useDispatch();
    
    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({isFav: currentFavMeals})
    }, [currentFavMeals])
    
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
    const mealTitle      = navigationData.navigation.getParam("title")
    const toggleFavorite = navigationData.navigation.getParam("toggleFav") 
    const isFavorite     = navigationData.navigation.getParam("isFav");
    // const mealId = navigationData.navigation.getParam('id');
    // const selected = MEALS.find( meal => meal.id === mealId);
    return {
        headerTitle: mealTitle,
        headerRight: 
            <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}> 
                <Item title = "Favorite" 
                      iconName = {isFavorite ? "ios-star" : "ios-star-outline"}
                      onPress = {toggleFavorite}/> 
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