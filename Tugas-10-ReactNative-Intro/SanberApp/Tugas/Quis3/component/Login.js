import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

const Login = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.logintxt}>Welcome Back</Text>
                <Text style={styles.login2txt}>Sign In To Continue</Text>
                <View style={styles.box}>
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
                        <Text style={styles.autotxt}>-OR-</Text>
                        <View style={styles.inboxLogin}>
                            <TouchableOpacity>
                                <View style={styles.inbox2_hub}>
                                    <View>
                                        <FontAwesome5 name="facebook" size={16} color='#38B5998' style={styles.icon} />
                                    </View>
                                    <View style={styles.txtName}>
                                        <Text style={styles.intext}>Facebook</Text>
                                    </View>
                                </View>
                                <View style={styles.inbox2_hub}>
                                    <View>
                                        <FontAwesome5 name="google" size={16} color='#F14336' style={styles.icon} />
                                    </View>
                                    <View style={styles.txtName}>
                                        <Text style={styles.intext}>Google</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#8fa382'
        },
        logintxt: {
            fontSize: 30,
            lineHeight: 36.57,
            marginTop: 63,
            textAlign: 'center',
            color: '#0C0423',
            marginVertical: 20
        },
        login2txt: {
            fontSize: 12,
            lineHeight: 14.63,
            marginTop: 63,
            textAlign: 'center',
            color: '#4D4D4D',
            marginVertical: 20
        },
        box: {
            width: 366,
            height: 498,
            top: 243,
            left: 24,
            position: 'absolute',
            backgroundColor: '#FFFFFF',
            borderRadius: 11
        },
        formtxt: {
            color: '#003366'
        },
        autotxt: {
            fontSize: 15,
            color: '#4C475A'
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
    },
    inboxLogin: {
        borderTopWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    intext: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
        textAlign: 'center'
    },
    inbox2_hub: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 2
    }
});
  