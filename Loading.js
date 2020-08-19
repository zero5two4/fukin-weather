import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting the fukin-weather</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100
  },
  text: {
    fontSize: 30,
    color: "#2c2c2c",
  },
});