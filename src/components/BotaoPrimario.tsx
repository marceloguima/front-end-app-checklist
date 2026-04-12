import { StyleSheet, Text, TouchableOpacity } from "react-native";


export function BotaoPrimario({ title, style, onPress }: { title: string; style?: any; onPress: () => void }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: "#1E90FF", 
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,    
        alignItems: "center",
        margin:10
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
});