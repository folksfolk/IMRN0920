import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Splash = ({
    navigation,
}) => {
    useEffect (() => {
        console.warn('success')
        setTimeout(() => {
            navigation.navigate('Register')
        }, 3000)
    }, [])
    return(
        <View style={styles.home}>
            <Image source={require('../assets/logo.png')} size={150} style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    home : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.1
    },
    icons: {
        resizeMode: 'contain'
    }
})

export default Splash