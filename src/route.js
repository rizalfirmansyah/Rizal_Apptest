import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack'
import { NavigationActions, createSwitchNavigator } from '@react-navigation/compat'


import splashscreens from './screens/splashscreens'
import welcomescreens from './screens/welcomescreens'
import homescreens from './screens/homescreens'


const StackRoute = createStackNavigator();
const StackAuth = createStackNavigator();
const StackHome = createStackNavigator();

function Splash() {
    return (
        <StackAuth.Navigator
        screenOptions={({ route, navigation }) => ({
            headerShown: false
        })}
        >
            <StackAuth.Screen name="splashscreens" component={splashscreens} />
            
        </StackAuth.Navigator>
    );
}

function Home() {
    return (
        <StackHome.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <StackHome.Screen options={{ headerShown: false }} name="welcomescreens" component={welcomescreens} />
            <StackHome.Screen options={{ headerShown: false }} name="homescreens" component={homescreens} />
        </StackHome.Navigator>
    );
}

function Route() {
    return (
        <NavigationContainer>
            <StackRoute.Navigator
            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                gestureEnabled: false,
                // ...TransitionPresets.ModalSlideFromBottomIOS,
            })}
            >
                <StackRoute.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <StackRoute.Screen
                    name="Home"
                    component={Home}
                />
            </StackRoute.Navigator>
        </NavigationContainer>
    );
}
export default Route;