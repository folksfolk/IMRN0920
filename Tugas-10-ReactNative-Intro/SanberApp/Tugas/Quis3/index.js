import React from "react";
import { createDrawerNavigation } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './component/HomeScreen'
import { LogIn } from './component/Login'
import { Register } from './component/Register'

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigation()

const index = () => {
    return(
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen
                name="Login"
                component={LogIn}
                options={{ title: "Log In"}} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

const MainApp = () => {
    return(
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={Home} />
                <Tabs.Screen name="Register" component={Register} />
                <Tabs.Screen name="Login" component={LogIn} />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

const MyDrawer = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Register" component={Register} />
                <Drawer.Screen name="Login" component={LogIn} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default index
