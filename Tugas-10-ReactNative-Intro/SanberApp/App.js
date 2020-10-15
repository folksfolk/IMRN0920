import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import VideoYoutube from './Tugas/Tugas12/App'
import Login from './Tugas/Tugas13/LoginScreen'
import Register from './Tugas/Tugas13/Register'
import About from './Tugas/Tugas13/About'

export default function App() {
  return (
    // <VideoYoutube />
    // < Login />
    // < Register />
    < About />
    // <ScrollView>
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <StatusBar style="auto" />
    //   </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
