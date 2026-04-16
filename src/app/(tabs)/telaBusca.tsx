import { Header } from "@/src/components/header";
import { Input } from "@/src/components/Input";
import { colors, fontSize, spacing } from "@/src/theme";
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";

export default function TelaBusca() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Header />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    width: "100%",
                    paddingHorizontal: spacing.xl,
                    alignItems: "center",
                }}
            >
                <Input placeholder="Buscar..." type="search" />
                <Text style={styles.info}>
                    Busque por modelo ou placa do veículo.
                </Text>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg100,
    },
    info: {
        color: colors.textPrimary,
        fontSize: fontSize.md,
        fontWeight: "bold",
        marginTop: spacing.xxxl,
    },
});
