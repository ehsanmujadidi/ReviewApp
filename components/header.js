import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>My ToDo List</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    header: {
        height: '10%',
        paddingTop: 40,
        backgroundColor: '#ecae13',
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})