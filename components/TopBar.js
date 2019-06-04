import React, { Component } from 'react'
import { StyleSheet, View, Animated } from 'react-native'
import { LinearGradient } from 'expo'
import { Block } from '../components/Block'
import * as theme  from '../constants/theme'

export default class TopBar extends Component {
    render() {
        return (
            <View style={styles.title}>
                <LinearGradient
                    colors={[theme.colors.primary, theme.colors.accent]}
                    style={{flex : 1.0}}
                    start={[0, 0]} end={[1, 0]}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        title: {
            flexDirection: 'row',
            height: theme.sizes.titleBarHeight, 
            paddingLeft: theme.sizes.padding,
            paddingRight: theme.sizes.padding,
        },
    }
);