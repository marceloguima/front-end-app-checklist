import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { boxShadow, colors } from "@/src/theme";


export function BotaoPrimario({ title, style, onPress, children }: { title: string; style?: any; onPress: () => void; children?: React.ReactNode }) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            {children}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        width: "100%",
        backgroundColor: colors.bg300, 
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 8,    
        alignItems: "center",
        margin:10,
        boxShadow: boxShadow.default,
    },
    buttonText: {
        color: colors.bg100,
        fontSize: 16,
        fontWeight: "bold",
    },
});