import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Register() {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Image source={require('../Tugas13/assets/Kirikumi.png')}/>
            <Text style={styles.registertxt}>Register Form</Text>
            <View style={styles.forminput}>
                <Text style={styles.formtxt}>Name</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.forminput}>
                <Text style={styles.formtxt}>Email</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.forminput}>
                <Text style={styles.formtxt}>Username</Text>
                <TextInput style={styles.input}/>
            </View>
            <View style={styles.forminput}>
                <Text style={styles.formtxt}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true}/>
            </View>
            <View style={styles.forminput}>
                <Text style={styles.formtxt}>Retype Password</Text>
                <TextInput style={styles.input} secureTextEntry={true}/>
            </View>
            <View style={styles.register}>
                <TouchableOpacity style={styles.btnregister}>
                    <Text style={styles.btntxt}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#8fa382'
  },
  registertxt: {
      fontSize: 24,
      marginTop: 63,
      textAlign: 'center',
      color: '#003366',
      marginVertical: 20
  },
  formtxt: {
      color: '#003366'
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
register: {
    marginTop: 20,
    alignItems: 'center'
}
});
