import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

const LoginScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../Tugas13/assets/Kirikumi.png')} style={styles.icon}/>
                <Text style={styles.logintxt}>Login</Text>
                <View style={styles.forminput}>
                    <Text style={styles.formtxt}>Username</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.forminput}>
                    <Text style={styles.formtxt}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true}/>
                </View>
                <View style={styles.login}>
                    <TouchableOpacity style={styles.btnlogin}>
                        <Text style={styles.btntxt}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.autotxt}>Don't Have An Account yet?</Text>
                    <TouchableOpacity style={styles.btnregister}>
                        <Text style={styles.btntxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8fa382'
    },
    logintxt: {
        fontSize: 24,
        marginTop: 63,
        textAlign: 'center',
        color: '#003366',
        marginVertical: 20
    },
    formtxt: {
        color: '#003366'
    },
    autotxt: {
        fontSize: 20,
        color: '#3EC6FF'
    },
    forminput: {
        marginHorizontal: 30,
        marginVertical: 5,
        alignContent: 'center',
        width: 294
    },
    input: {
        height: 40,
        borderColor: '#003366',
        padding: 10,
        borderWidth: 1
    },
    btnlogin: {
        alignItems: 'center',
        backgroundColor: '#3EC6FF',
        padding: 10,
        borderRadius: 16,
        marginHorizontal: 30,
        marginBottom: 10,
        marginTop: 10,
        width: 140
    },
    btnregister: {
      alignItems: 'center',
      backgroundColor: '#003366',
      padding: 10,
      borderRadius: 16,
      marginHorizontal: 30,
      marginBottom: 10,
      marginTop: 10,
      width: 140
  },
  btntxt: {
      color: 'white',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold'
  },
  login: {
      marginTop: 20,
      alignItems: 'center'
  }, 
  icon: {
      textAlign: 'center'
  }
});
  