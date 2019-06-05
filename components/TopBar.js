import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'
import { LinearGradient } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import * as theme  from '../constants/theme'

export default class TopBar extends Component {
  render() {
    const {
      firstIcon,
      secondIcon,
      text,
      ...props
    } = this.props;

    return (
      <View style={[styles.container, theme.effects.shadow]}>
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.accent]}
          style={styles.title}
          start={[0, 0]} end={[1, 0]}>
            <Ionicons name={firstIcon} size={32} color={theme.colors.white} style={styles.menu} />
            <Text style={styles.text}>{text}</Text>
            { secondIcon && <Ionicons name="md-person" size={32} color={theme.colors.white} /> }
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        height: theme.sizes.titleBarHeight,
        backgroundColor: '#FFFF',
    },
    title: {
        flex: 1.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: theme.sizes.padding,
        paddingRight: theme.sizes.padding,
        
    },
    text: {
        flex: 1,
        fontSize: theme.sizes.h1,
        fontFamily: 'open-sans-semibold',
        color: theme.colors.white
    },
    menu: {
      paddingRight: 25
    }
  }
);