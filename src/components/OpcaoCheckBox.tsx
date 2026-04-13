import {View, Text, StyleSheet} from "react-native";
import { colors, spacing, fontSize } from "@/src/theme";

export function OpcaoCheckBox({label, checked}: {label: string, checked: boolean}) {
    return (
        <View style={styles.container}>
            <View style={[styles.checkbox, checked && styles.checkboxChecked]} />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 166,
        height:64,
        backgroundColor: colors.bgTerciario,
        borderColor: colors.borders,
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.md,
        paddingHorizontal: spacing.md,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: colors.borders,
        borderRadius: 4,
    },
    checkboxChecked: {
        backgroundColor: colors.bgButtonPrimario,
        borderColor: colors.bgButtonPrimario,
    },
    label: {
        color: colors.textPrimary,
        fontSize: fontSize.sm,
    },
});