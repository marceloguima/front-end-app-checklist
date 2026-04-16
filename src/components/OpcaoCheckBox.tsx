import { View, Text, StyleSheet, Pressable  } from "react-native";
import { colors, spacing, fontSize } from "@/src/theme";
import { Checkbox } from "react-native-paper";
import { useState } from "react";

export function OpcaoCheckBox({
    label,
}: {
    label: string;
}) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <Pressable style={[styles.checkboxContainer, isChecked && styles.checked]} onPress={() => setIsChecked(!isChecked)}>
            <Checkbox color={colors.bg300} uncheckedColor={colors.bg500}
                status={isChecked ? "checked" : "unchecked"}
            />
            <Text style={styles.checkboxLabel}>{label}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.sm,
        borderWidth: 1,
        borderColor: colors.borders,
        borderRadius: spacing.sm,
        padding: spacing.sm,
        backgroundColor: colors.bg200,
    },
    checked: {
        backgroundColor: colors.bg900,
        // borderColor: colors.bgButtonPrimario,
    },
    checkboxLabel: {
        fontSize: fontSize.md,
        color: colors.textPrimary,
    },
});
