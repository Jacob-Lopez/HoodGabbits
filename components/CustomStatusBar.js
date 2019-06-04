import React, { Component } from 'react'
import { StyleSheet, View, Animated, StatusBar } from 'react-native'
import { LinearGradient } from 'expo'
import { Block } from '../components/Block'
import * as theme  from '../constants/theme'

export default class CustomStatusBar extends Component {
    render() {
        return (
            <View style={styles.statusBarWrapper}>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.24)" animated/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
        statusBarWrapper: {
            height: theme.sizes.statusBarHeight,
        },
    }
);