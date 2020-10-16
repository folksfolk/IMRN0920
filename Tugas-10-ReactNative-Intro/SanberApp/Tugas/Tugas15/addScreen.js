import React from "react";
import { StyleSheet, Text, View } from "react-native";

const addScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Halaman Tambah</Text>
        </View>
    )
}

export default addScreen

const styles = StyleSheet.create({
    container: {
        fontSize: 24,
        padding: 5,
        borderRadius: 10
    }
})