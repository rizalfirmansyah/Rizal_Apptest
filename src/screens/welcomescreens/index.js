import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'

const index = ({ navigation }) => {

    const nextPress = () => {
        navigation.navigate('homescreens');
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.viewimage}>
                <Image
                    style={styles.image}
                    source={require('../../assets/welcome1.jpeg')}
                />
            </View>
            <View style={styles.viewDesc}>
                <View style={styles.viewwelcome}>
                    <Text style={styles.textWelcome}>Welcome</Text>
                </View>
                <View style={styles.viewwelcome}>
                    <Text style={styles.textdesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nulla fringilla dui consequat luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
            </View>
            <View style={styles.viewbutton}>
                <TouchableOpacity style={styles.button} onPress={nextPress.bind(this)} testID='nextButton'>
                    <Text style={styles.next}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    viewimage: {
        height: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image: {
        width: '80%',
        height: '60%'
    },
    viewDesc: {
        height: '35%'
    },
    viewwelcome: {
        padding: 10,
        marginLeft: 20,
        marginRight: 30
    },
    textWelcome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#55b1f8'
    },
    textdesc: {
        fontSize: 12,
        textAlign: 'justify',
        color: '#7190a3'
    },
    viewbutton: {
        height: '15%'
    },
    button: {
        borderRadius: 5,
        padding: 15,
        marginLeft: 20,
        marginRight: 30,
        backgroundColor: '#55b1f8'
    },
    next: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    }
})
