import {View, Text, StyleSheet,} from "react-native";
import { colors, spacing, borderRadius, fontSize } from "@/src/theme";

export function CampoAviso({ title, descricao }: { title: string; descricao: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: spacing.xs,
        backgroundColor: colors.bg1001,
        borderWidth: 1,
        borderColor: colors.bg1000,
        borderRadius: borderRadius.md,
        alignItems: "center",   
    },
    title: {
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    descricao: {
        color: colors.textPrimary,
        fontSize: 14,
        lineHeight: 20,
        textAlign: "center",
    },
});