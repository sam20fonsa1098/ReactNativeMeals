import React from 'react'
import {View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground} from 'react-native'

import DefaultText from '../components/DefaulText'

const MealItem = (props) => {
    return (
        <View style = {styles.MealItem}>
            <TouchableNativeFeedback onPress = {props.onSelectMeal}>
                <View>
                    <View style = {{...styles.MealRow, ...styles.MealHeader}}>
                        <ImageBackground source = {{uri: props.image}} style = {styles.bgImage}>
                            <View style = {styles.titleContainer}>
                                <Text style = {styles.title} numberOfLines = {1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style = {{...styles.MealRow, ...styles.MealDetail}}>
                        <DefaultText>{props.duration}</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordabilty.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    MealRow: {
        flexDirection: 'row',
    },
    MealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    }
    ,MealHeader: {
        height: '85%',       
    },
    MealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        textAlign: 'center'
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    }
})

export default MealItem;