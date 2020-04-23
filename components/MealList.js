import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'

import MealItem from '../components/MealItem'

const MealList = props => {

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

    return(
        <View style = {styles.list}>
            <FlatList data         = {props.listData}
                      keyExtractor = {(item, index) => item.id}
                      renderItem   = {renderMealItem}
                      style        = {{width: '100%'}}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealList;