import React, { useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const index = () => {
    const navigation = useNavigation();

    useEffect(() => {
        getData()
        return () => {
            // cleanup
        }
    }, [])

    const getData = async () => {
        setTimeout(() => {
            navigation.navigate('Home', { screen: 'welcomescreens' });
        }, 3000);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Image style={styles.image} source={require('../../assets/welcome.jpeg')} />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    image: {
        width: '70%',
        height: '30%'
    },
})
