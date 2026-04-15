import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors, spacing } from "@/src/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TelaPerfil() {
    return (
        <View style={styles.container}>
            <View style={styles.perfil}>
                <FontAwesome5 name="user-circle" size={64} color={colors.textPrimary} />{" "}
                <Text style={styles.title}>David dos santos</Text>
            </View>
            <Pressable style={styles.button}>
                <MaterialIcons
                    name="help"
                    size={24}
                    color={colors.textPrimary}
                />
                <Text style={styles.buttonText}>Ajuda</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <MaterialIcons
                    name="settings"
                    size={24}
                    color={colors.textPrimary}
                />
                <Text style={styles.buttonText}>Configurações</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <MaterialIcons name="logout" size={24} color={colors.bg1000} />
                <Text style={styles.buttonTextLogout}>Sair</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.bg100,
        paddingHorizontal: spacing.xl,
    },

    perfil: {
       alignItems: "center",
        gap: spacing.xl,
        marginBottom: spacing.xxxl,
    },
    title: {
        color: colors.textPrimary,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: spacing.xxxl,
    },
    button: {
        width: "100%",
        flexDirection: "row",
        gap: spacing.xl,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.borders,
    },
    buttonText: {
        color: colors.textPrimary,
        fontSize: 16,
    },
    buttonTextLogout: {
        color: colors.bg1000,
        fontSize: 16,
    },
});
