import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const index = (props) => {
    const value   = props.data;
    const schimer = props.isVisibleProvider;
    const listPress = () => {
        props.listSelect(value)
    }
    return (
        <TouchableOpacity style={styles.container} onPress={listPress}>
            <View style={styles.viewimage}>
                <ShimmerPlaceholder visible={schimer} style={styles.image}>
                    {
                        value.photo != "N/A" ?
                            <Image
                                style={[styles.image, { resizeMode: 'cover' }]}
                                source={{ uri: value.photo }}
                            />
                            :
                            <Image
                                style={[styles.image, { resizeMode: 'cover' }]}
                                source={require('../../assets/avatar1.jpeg')}
                            />
                    }
                </ShimmerPlaceholder>
            </View>
            <View style={styles.viewname}>
                <ShimmerPlaceholder visible={schimer} style={styles.borderradius}>
                    <Text style={styles.textname}>{value.firstName} {value.lastName}</Text>
                </ShimmerPlaceholder>
            </View>
        </TouchableOpacity>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 40
    },
    viewimage: {
        width: '15%',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    viewname: {
        width: '80%',
        margin: 10,
        justifyContent: 'center'
    },
    textname: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#55b1f8'
    },
    borderradius: {
        borderRadius: 10
    }
})
