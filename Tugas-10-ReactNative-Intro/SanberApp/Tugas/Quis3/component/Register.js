import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const Register = ({navigation}) => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.registertxt}>Welcome</Text>
            <Text style={styles.register2txt}>Sign up to continue</Text>
            <View style={styles.box}>
                <View style={styles.forminput}>
                    <Text style={styles.formtxt}>Name</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.forminput}>
                    <Text style={styles.formtxt}>Email</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.forminput}>
                    <Text style={styles.formtxt}>Phone Number</Text>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.forminput}>
                    <Text style={styles.formtxt}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true}/>
                </View>
                <View style={styles.register}>
                    <TouchableOpacity style={styles.btnregister}>
                        <Text style={styles.btntxt}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formSign}>
                    <Text style={styles.formtxt}>Already Have an Account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.Signtxt}>Sign In</Text>
                    </TouchableOpacity>
                </View>
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
      fontSize: 30,
      lineHeight: 36.57,
      marginTop: 63,
      textAlign: 'center',
      color: '#0C0423',
      marginVertical: 20
  },
  register2txt: {
    fontSize: 12,
    lineHeight: 14.63,
    marginTop: 63,
    textAlign: 'center',
    color: '#4D4D4D',
    marginVertical: 20
},
  formtxt: {
      color: '#003366',
      fontSize: 12
  },
  forminput: {
      marginHorizontal: 30,
      marginVertical: 5,
      alignContent: 'center',
      width: 294
  },
  input: {
      height: 6,
      borderColor: '#FFFFFF',
      padding: 10,
      borderWidth: 1,
      borderRadius: 11
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
    alignItems: 'center',
    borderRadius: 6,
    color: '#F77866'
},
formSign: {
    marginHorizontal: 30,
    marginVertical: 5,
    alignContent: 'center',
    width: 294,
    flexDirection: 'row'
},
box: {
    width: 366,
    height: 536,
    top: 249,
    left: 32,
    borderRadius: 11,
    color: '#FFFFFF' 
},
Signtxt: {
    color: '#F77866',
    fontSize: 12
}
});

export default Register
