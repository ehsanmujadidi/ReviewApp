import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TodoList({item, deleteHandler}) {
    return(
        <View style={styles.item}>
            <MaterialCommunityIcons name='delete-outline' size={20} color='red' onPress={() => deleteHandler(item.key)} />
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 15,
        borderColor: '#dddddd',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    itemText: {
        paddingLeft: 15,
        
    }
})