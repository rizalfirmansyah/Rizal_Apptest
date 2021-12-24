import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const index = (props) => {

    const data = props.dataEdit;
    const [Id, setId] = useState(data.id);
    const [firstname, setFirstName] = useState(data.firstName);
    const [lastname, setLastName] = useState(data.lastName);
    const [ages, setAge] = useState(data.age.toString());
    const [image, setImage] = useState(data.photo != "N/A" ? data.photo : 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/08/30/2823959124.jpg');

    const updateDataPress = () => {
        props.updateData(Id, firstname, lastname, ages);
    }

    const deleteDataPress = () => {
        props.deleteData(Id, firstname, lastname, ages);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textwelcome}>Form Upate Data</Text>
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
                        value={ages}
                        keyboardType='number-pad'
                        returnKeyType={"done"}
                        placeholder={"age"}
                        placeholderTextColor="#00000050"
                    />
                    <Text style={[styles.textjhon, { fontWeight: 'bold', marginBottom: 10, marginVertical: 20 }]}>Image</Text>
                    <View style={styles.viewImage}>
                        <Image
                            style={styles.imageStyle1}
                            source={{ uri: image }}
                        />
                    </View>

                    <View style={styles.viewButton}>
                        <View style={styles.viewRowButton}>
                            <TouchableOpacity style={[ styles.button, { backgroundColor: '#55b1f8' }]} onPress={updateDataPress}>
                                <Text style={[styles.viewTextButton, { color: '#fff' }]}>Update</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewRowButton}>
                            <TouchableOpacity style={[ styles.button, { borderColor: 'red', borderWidth: 1 }]} onPress={deleteDataPress}>
                                <Text style={[styles.viewTextButton, { color: 'red' }]}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
    viewImage: { padding: 20, alignItems: 'center', borderColor: '#55b1f8', borderWidth: 1, backgroundColor: '#55b1f820' },
    imageStyle1: { height: 150, width: 200 },
    viewButton: { flexDirection: 'row', marginBottom: 10, marginVertical: 20 },
    viewRowButton: { width: '50%', padding: 10 },
    viewTextButton: { fontSize: 15, textAlign: 'center', fontWeight: 'bold' },
    button : { padding: 15, borderRadius: 10 }
})
