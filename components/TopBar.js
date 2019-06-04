import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'
import { LinearGradient } from 'expo'
import { Block } from '../components/Block'
import * as theme  from '../constants/theme'

export default class TopBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={[theme.colors.primary, theme.colors.accent]}
                    style={styles.title}
                    start={[0, 0]} end={[1, 0]}>
                    <Text style={styles.text}>Home</Text>
                </LinearGradient>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: theme.sizes.titleBarHeight, 
        },
        title: {
            flex: 1.0,
            justifyContent: 'center',
            paddingLeft: theme.sizes.padding,
            paddingRight: theme.sizes.padding,
            
        },
        text: {
            fontSize: theme.sizes.h1,
            fontFamily: 'open-sans-semibold',
            color: theme.colors.white
        }
    }
);