import React from "react";
import { createDrawerNavigation } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Skill } from '../Tugas14/SkillScreen'
import { Add } from './addScreen'
import { Project } from './ProjectScreen'
import { LogIn } from '../Tugas13/LoginScreen'
import About from "../Tugas13/About";

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const Drawer = createDrawerNavigation()

export default() => {
  <NavigationContainer>
      <Tabs.Navigator>
          <Tabs.Screen name="Skill" component={Skill} />
          <Tabs.Screen name="Project" component={Project} />
          <Tabs.Screen name="Add" component={Add} />
      </Tabs.Navigator>
      <AuthStack.Navigator>
          <AuthStack.Screen
          name="Login"
          component={LogIn}
          options={{ title: "Log In"}} />
      </AuthStack.Navigator>
      <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
  </NavigationContainer>
}
