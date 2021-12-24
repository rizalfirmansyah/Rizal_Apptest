import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const index = (props) => {

    const saveDataPress = () => {
        props.submitData(firstname, lastname, age, image)
    }

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/08/30/2823959124.jpg');

    return (
        <View style={styles.container}>
            <Text style={styles.textwelcome}>Form Submit Data</Text>
            <ScrollView>
                <View style={styles.marginvertical}>
                    <Text style={[styles.textjhon, { fontWeight: 'bold', marginBottom: 10 }]}>First Name</Text>
                    <TextInput
                        style={[styles.textInput, { borderColor: '#55b1f8' }]}
                        onChangeText={text => setFirstName(text)}
                        value={firstname}
                        returnKeyType={"done"}
                        placeholder={"first name"}
                        placeholderTextColor="#00000050"
                    />
                    <Text style={[styles.textjhon, { fontWeight: 'bold', marginBottom: 10, marginVertical: 20 }]}>Last Name</Text>
                    <TextInput
                        style={[styles.textInput, { borderColor: '#55b1f8' }]}
                        onChangeText={text => setLastName(text)}
                        value={lastname}
                        returnKeyType={"done"}
                        placeholder={"last name"}
                        placeholderTextColor="#00000050"
                    />
                    <Text style={[styles.textjhon, { fontWeight: 'bold', marginBottom: 10, marginVertical: 20 }]}>Age</Text>
                    <TextInput
                        style={[styles.textInput, { borderColor: '#55b1f8' }]}
                        onChangeText={text => setAge(text)}
                        value={age}
                        keyboardType='number-pad'
                        returnKeyType={"done"}
                        placeholder={"age"}
                        placeholderTextColor="#00000050"
                    />
                    <Text style={[styles.textjhon, { fontWeight: 'bold', marginBottom: 10, marginVertical: 20 }]}>Image</Text>
                    <View style={styles.viewImage}>
                        <Image
                            style={styles.image1Style}
                            source={{ uri: image }}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={saveDataPress}>
                        <Text style={styles.textButton}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    )
}

export default index

const styles = StyleSheet.create({
    container: { height: '90%', margin: 10, marginLeft: 20, marginRight: 20 },
    marginvertical: { marginVertical: 20 },
    textwelcome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#55b1f8'
    },
    textjhon: {
        fontSize: 14,
        color: '#55b1f8'
    },
    textInput: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#55b1f820',
        color: '#55b1f8',
        borderWidth: 1
    },
    viewImage: {
        padding: 20,
        alignItems: 'center',
        borderColor: '#55b1f8',
        borderWidth: 1,
        backgroundColor: '#55b1f820'
    },
    image1Style: {
        height: 150,
        width: 200
    },
    button: {
        marginVertical: 20,
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#55b1f8'
    },
    textButton: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
})
