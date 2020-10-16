import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

const About = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>About Me</Text>
                <Image source={require('../Tugas13/assets/sam.jpg')} size={150} style={styles.icon}/>
                <Text style={styles.name}>Muhammad Ardhani</Text>
                <Text style={styles.job}>Mahasiswa</Text>
                <View style={styles.box}>
                    <Text style={styles.intitle}>Portofolio</Text>
                    <View style={styles.inbox}>
                        <View>
                            <FontAwesome5 name="gitlab" size={40} color='#3EC6FF' style={styles.icon} />
                            <Text style={styles.intext}>@folksfolk</Text>
                        </View>
                        <View>
                            <FontAwesome5 name="github" size={40} color='#3EC6FF' style={styles.icon} />
                            <Text style={styles.intext}>@folksfolk</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.intitle}>Contact</Text>
                    <View style={styles.inbox2}>
                        <View style={styles.inbox2_hub}>
                            <View>
                                <FontAwesome5 name="facebook" size={40} color='#3EC6FF' style={styles.icon} />
                            </View>
                            <View style={styles.txtName}>
                                <Text style={styles.intext}>@think.but.think</Text>
                            </View>
                        </View>
                        <View style={styles.inbox2_hub}>
                            <View>
                                <FontAwesome5 name="instagram" size={40} color='#3EC6FF' style={styles.icon} />
                            </View>
                            <View style={styles.txtName}>
                                <Text style={styles.intext}>@dhani_iihh</Text>
                            </View>
                        </View>
                        <View style={styles.inbox2_hub}>
                            <View>
                                <FontAwesome5 name="twitter" size={40} color='#3EC6FF' style={styles.icon} />
                            </View>
                            <View style={styles.txtName}>
                                <Text style={styles.intext}>@dhani_iihh</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
      marginTop: 64,
      backgroundColor: '#8fa382'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#003366',
        textAlign: 'center'
    },
    icon: {
        textAlign: 'center'
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#003366',
        textAlign: 'center'
    },
    job: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3ec6ff',
        textAlign: 'center',
        marginBottom: 7
    },
    box: {
        borderColor: 'blue',
        borderRadius: 10,
        borderBottomColor: '#000',
        padding: 5,
        backgroundColor: "#efefef",
        marginBottom: 9
    },
    inbox: {
        borderTopWidth: 2,
        borderTopColor: '#003366',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    inbox2:{
        borderTopWidth: 2,
        borderTopColor: '#003366',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    inbox2_hub: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 2
    },
    intitle: {
        fontSize: 18,
        color: '#003366'
    },
    intext: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#003366',
        textAlign: 'center'
    }
});
  