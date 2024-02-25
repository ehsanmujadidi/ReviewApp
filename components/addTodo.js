import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

export default function AddTodo({ addHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add New ToDo..'
                onChangeText={changeHandler}
            />
            <Pressable style={styles.button} onPress={() => addHandler(text)}>
                <Text style={styles.text}>Add ToDo</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})