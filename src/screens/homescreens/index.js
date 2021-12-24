import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { FAB } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { contactGet, contactCreate, contactDel, contactUpdate } from '../../actions/getcontactactions';
import Modal from "react-native-modal";
import ListScreen from '../listscreen';
import Modalinputscreens from '../modalinputscreens';
import Modaleditscreens from '../modaleditscreens';
import Loading from '../Loading';
import Toast from 'react-native-toast-message';

const index = ({ navigation }) => {

    const dispatch = useDispatch();
    const [listData, setListData] = useState('');
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});
    const [load, setLoad] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isVisibleProvider, setisVisibleProvider] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibleEdit, setModalVisibleEdit] = useState(false);

    /* begin::load data */
    useFocusEffect(
        useCallback(() => {
            // Do something when the screen is focused
            getData()
            return () => {
                // alert('Screen was unfocused');
            };
        }, [])
    );

    const getData = async () => {
        const data = await dispatch(contactGet());
        const response = data.payload.data.data;
        setListData(response);
        setTimeout(() => {
            setisVisibleProvider(true)
        }, 2000);
    }

    const listSearch = (text) => {
        setSearch(text)
        let filteredData = listData.filter(function (item) {
            return item.firstName.includes(text);
          });
        setSearchData(filteredData)
    }

    const handleRefresh = () => {

    }
    /* end::load data */
    /* begin::action fab */
    const modalAdd = () => {
        setModalVisible(!isModalVisible);
    };
    /* end::action fab */

    /* begin::list select*/
    const listSelectPress = (value) => {
        setDataEdit(value)
        setModalVisibleEdit(true)
    }
    /* end::list select */

    /* begin::action save */
    const submitDataPress = async (firstname, lastname, age, image) => {
        setModalVisible(false)
        setLoading(true)
        const postData = await dispatch(contactCreate(firstname, lastname, age, image));
        setLoading(false)
        getData()
        if (postData.payload != undefined) {
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Success',
                text2: postData.payload.data.message,
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 60
            });
        } else {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Error',
                text2: postData.error.response.data.error,
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 60
            });
        }

    }
    /* end::action save */
    /* begin::action update */
    const updateDataPress = async (Id, firstname, lastname, ages) => {
        setModalVisibleEdit(false)
        setLoading(true)
        const updateData = await dispatch(contactUpdate(Id, firstname, lastname, ages));
        console.log(updateData)
        setLoading(false)
        getData()
        if (updateData.payload != undefined) {
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Success',
                text2: updateData.payload.data.message,
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 60
            });
        } else {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Error',
                text2: updateData.error.response.data.message,
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 60
            });
        }
    }
    /* end::action update */
    /* begin::action delete */
    const deleteDataPress = async (Id) => {
        setModalVisibleEdit(false)
        setLoading(true)
        const delData = await dispatch(contactDel(Id));
        console.log(delData)
        setLoading(false)
        getData()
        if (delData.payload != undefined) {
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Success',
                text2: delData.payload.data.message,
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 60
            });
        } else {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Error',
                text2: delData.error.response.data.message,
                visibilityTime: 10000,
                autoHide: true,
                topOffset: 60
            });
        }
    }
    /* end::action delete */

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.header}>
                <View style={styles.welcome}>
                    <View style={styles.viewwelcome}>
                        <Text style={styles.textwelcome}>Welcome,</Text>
                        <Text style={styles.textjhon}>Jhon Doe</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.profile}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/avatar1.jpeg')}
                    />
                </TouchableOpacity>
            </View>
            {/* begin::list screen */}
            <View style={{ height: '90%', backgroundColor: '#ecf0f2', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>

                <View style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
                    <TextInput
                        style={[styles.textInput, { borderColor: '#ffffff50' }]}
                        onChangeText={text => listSearch(text)}
                        value={search}
                        returnKeyType={"done"}
                        placeholder={"Search"}
                        placeholderTextColor="#55b1f8"
                    />
                </View>

                <FlatList
                    testID='dataFlatlist'
                    style={{ marginTop: 10 }}
                    refreshing={load}
                    onRefresh={handleRefresh}
                    data={search == '' ? listData : searchData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item: data }) => (
                        <ListScreen
                            data={data}
                            isVisibleProvider={isVisibleProvider}
                            listSelect={listSelectPress}
                        />
                    )}
                />
            </View>
            {/* end::list screen */}
            {/* begin::modal add data */}
            <Modal
                isVisible={isModalVisible}
                // onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['down']}
                onBackdropPress={() => setModalVisible(false)}
                style={{ margin: 0, bottom: 0, top: '10%', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#F5F5F5' }}
            >
                <Modalinputscreens
                    submitData={submitDataPress}
                />
            </Modal>
            {/* end::modal add data */}
            {/* begin::modal edit data */}
            <Modal
                isVisible={isModalVisibleEdit}
                onSwipeComplete={() => setModalVisibleEdit(false)}
                swipeDirection={['down']}
                onBackdropPress={() => setModalVisibleEdit(false)}
                style={{ margin: 0, bottom: 0, top: '10%', borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#fff' }}
            >
                <Modaleditscreens
                    updateData={updateDataPress}
                    deleteData={deleteDataPress}
                    dataEdit={dataEdit}
                />
            </Modal>
            {/* end::modal edit data */}
            {/* begin::fab */}
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={modalAdd}
            />
            {/* end::fab */}
            {loading == true ? <Loading /> : null}
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View >
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4070cb'
    },
    header: {
        height: '10%',
        flexDirection: 'row'
    },
    welcome: {
        width: '80%'
    },
    viewwelcome: {
        margin: 20
    },
    textwelcome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    textjhon: {
        fontSize: 14,
        color: '#fff'
    },
    profile: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 65,
        width: 60,
        borderRadius: 60 / 2
    },
    fab: {
        position: 'absolute',
        right: 30,
        bottom: 40,
        backgroundColor: '#55b1f8'
    },
    textInput: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#55b1f820',
        color: '#55b1f8',
        borderWidth: 1
    },
})
