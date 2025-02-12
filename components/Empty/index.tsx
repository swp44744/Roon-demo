import React from 'react'
import { StyleSheet, Text, TextStyle, View } from 'react-native'

interface Props {
  subtitle?: string
  title?: string
  titleStyle?: TextStyle
  subtitleStyle?: TextStyle
  iconStyle?: TextStyle
}

export const Empty: React.FunctionComponent<Props> = ({
  subtitle,
  title,
  titleStyle,
  subtitleStyle,
  iconStyle,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.icon, iconStyle]}>📭</Text>
      <Text style={[styles.title, titleStyle]}>{title ?? "No Results Found."}</Text>
      {subtitle && (
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      )}
    </View>
  )
}

const styles = 
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 32,
    },
    icon: {
      fontSize: 48,
      marginBottom: 8,
    },
    subtitle: {
      color: "white",
      fontSize: 13,
      textAlign: 'center',
    },
    title: {
      color: "white",
      fontSize: 15,
      fontWeight: '600',
    },
  })
