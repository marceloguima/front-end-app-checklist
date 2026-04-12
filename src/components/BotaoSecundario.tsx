import { StyleSheet, Text, TouchableOpacity } from "react-native";


export function BotaoSecundario({ title, style, onPress, icon }: { title: string; style?: any; onPress: () => void; icon?: React.ReactNode }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            {icon && <Text style={styles.buttonText}>{icon}</Text>}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        backgroundColor: "#3baffc17",
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,    
        margin:10
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
});