import {
    ScrollView,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
} from "react-native";
import {
    colors,
    fontSize,
    fontWeight,
    spacing,
    borderRadius,
    borderWidth,
    sizes,
} from "@/src/theme/index";
import { Header } from "@/src/components/header";
import { BotaoPrimario } from "@/src/components/BotaoPrimario";

export default function Home() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Header />
            <ScrollView
                contentContainerStyle={{ 
                    flexGrow: 1,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: spacing.xl,
                }}
            >
                <BotaoPrimario
                    style={{ marginVertical: 350 }}
                    title="Adicionar um checklist"
                    onPress={() => {}}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg100,
    },
    title: {
        color: colors.textPrimary,
        fontSize: 24,
        fontWeight: "bold",
    },
});
