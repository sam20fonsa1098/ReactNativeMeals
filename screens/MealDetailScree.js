import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const MealDetailScreen = (props) => {
    return (
        <View style = {styles.screen}>
            <Text>This is the mealDetailScreen</Text>
            <Button title = "Go Back to Categories" onPress = {() => {
                //Ìt is possible to back to the top to the stack
                props.navigation.popToTop();
            }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen;