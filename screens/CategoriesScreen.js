import React from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

const CategoriesScreen = (props) => {
    return (
        <View style = {styles.screen}>
            <Text>This is the categoriesScreen</Text>
            <Button title = "Go to Meals" onPress = {() => {
                //It is possible to navigate
                // props.navigation.navigate({routeName: 'CategoryMeal'});
                //It is possible to replace the stack as well
                props.navigation.replace('CategoryMeal')
            }}></Button>
            {/* Use push to back to the same page */}
            <Button title = "Go to Meals with push" onPress = {() => {
                props.navigation.push('Categories');
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

export default CategoriesScreen;