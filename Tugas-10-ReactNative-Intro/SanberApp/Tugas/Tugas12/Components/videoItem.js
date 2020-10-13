import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class videoItem extends Component {
    render(){
        let video = this.props.video;
        return(
            <View style={styles.container}>
                <Image source={require('../Images/shohoku-wins.jpg')} style={{height:200}}/>
                <View style={styles.descContainer}>
                    <Image source={require('../Images/sam.jpg')} style={{width: 50, height:50, borderRadius:25}}/>
                    <View style={styles.videoDesc}>
                        <Text style={styles.videoTitle}>Shohoku Wins Versus Shoyo</Text>
                        <Text style={styles.videoStats}>Wok wok . 1B Views . 6 secs ago</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="more-vert" size={20} color='#999999'/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    descContainer: {
        flexDirection: 'row',
        paddingTop: 15
    },
    videoTitle: {
        fontSize: 16,
        color: '#3c3c3c'
    },
    videoDesc: {
        paddingHorizontal: 15,
        flex: 1
    },
    videoStats: {
        fontSize: 15,
        paddingTop: 4
    }
})