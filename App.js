import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Route from './src/route'



import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from "redux";
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import promiseMiddleware from 'redux-promise-middleware';
const logger = createLogger({});
import Reducers from './src/reducers'
const client = axios.create({ baseURL: 'https://simple-contact-crud.herokuapp.com', responseType: 'json' });
const store = createStore(Reducers, applyMiddleware(promiseMiddleware, axiosMiddleware(client), thunk, logger));

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
