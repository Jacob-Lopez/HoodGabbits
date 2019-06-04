import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'
import { LinearGradient } from 'expo'
import { Block } from '../components/Block'
import { Ionicons } from '@expo/vector-icons';
import * as theme  from '../constants/theme'

export default class TopBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={[theme.colors.primary, theme.colors.accent]}
                    style={styles.title}
                    start={[0, 0]} end={[1, 0]}>
                        <Ionicons name="md-menu" size={32} color={theme.colors.white} />
                        <Text style={styles.text}>Home</Text>
                        <Ionicons name="md-person" size={32} color={theme.colors.white} />
                </LinearGradient>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        container: {
            height: theme.sizes.titleBarHeight, 
        },
        title: {
            flex: 1.0,
            flexDirection: 'row',
            alignItems: 'center',
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