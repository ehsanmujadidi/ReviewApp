import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        padding: 25,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
      fontSize: 18,
      color: '#333'
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20
    }
});