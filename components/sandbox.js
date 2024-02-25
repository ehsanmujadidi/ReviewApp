import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}></View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 140,
    backgroundColor: '#ccc'
  }
})