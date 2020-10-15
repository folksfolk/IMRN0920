import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class SkillItem extends Component {
    render(){
        let skill = this.props.skill;
        return(
            <View style={styles.container}>
                <View style={styles.descContainer}>
                    <Icon name={skill.iconName} size={75} style={{width: 75, height:75, color: '#003366', alignItems: 'center'}}/>
                    <View style={styles.skillDesc}>
                        <Text numberOfLines={3} style={styles.skillTitle}>{skill.skillName}</Text>
                        <Text style={styles.skillCategory}>{skill.categoryName}</Text>
                        <Text style={styles.skillPercent}>{skill.percentageProgress}</Text>
                    </View>
                    <TouchableOpacity style={styles.note}>
                        <Text style={styles.noteText}>{`>`}</Text>
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
    skillTitle: {
        fontSize: 24,
        color: '#003366'
    },
    skillDesc: {
        paddingHorizontal: 15,
        flex: 1
    },
    skillCategory: {
        fontSize: 16,
        paddingTop: 4,
        color: '#3EC6FF'
    },
    skillPercent: {
        fontSize: 48,
        paddingTop: 4,
        color: '#FFFFFF'
    },
    note: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
      },
      noteText: {
        color: '#003366',
        fontSize: 50,
        color: '#2980b9',
        height: 45
      }
})