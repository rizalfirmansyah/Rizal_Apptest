import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function index() {
    return (
        <View style={styles.viewLoading}>
            <View style={styles.imageLoading}>
                <Image source={require('../../assets/loading.gif')} style={styles.loadingGif} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewLoading: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    imageLoading: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10
    },
    loadingGif: {
        width: 100,
        height: 100
    }
})
