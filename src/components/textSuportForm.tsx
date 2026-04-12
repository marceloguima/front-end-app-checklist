import { Text, StyleSheet, View } from "react-native";

interface TextSuportFormProps {
    children?: string;
    link?: string;
    onPress?: () => void;
}
export function TextSuportForm({
    children,
    link,
    onPress,
}: TextSuportFormProps) {
    return (
        <View style={styles.suporteContainer}>
            {children && <Text style={styles.suporte}>{children}</Text>}

            {link && (
                <Text style={styles.link} onPress={onPress}>
                    {link}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    suporteContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginTop: 20,
    },
    suporte: {
        color: "#ffffff80",
        fontSize: 14,
    },
    link: {
        color: "#1E90FF",
        textDecorationLine: "underline",
    },
});
