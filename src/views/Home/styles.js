import {
    StyleSheet,
  } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        margin: 24,
    },
    input: {
        borderWidth: 1,
        marginBottom: 24,
        borderColor: "#ddd",
        paddingHorizontal: 20,
        paddingVertical: 15,
        color: '#333',
    },
    buttonSave: {
        backgroundColor: "#333",
        padding: 20,
        color: 'white',
    },
    buttonSaveText: {
        color: 'white',
        fontSize: 14,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    taskListTitle: {
        fontSize: 20,
        marginTop: 48,
        marginBottom: 24,
        fontWeight: "600",
        color: "#333",
    }
});