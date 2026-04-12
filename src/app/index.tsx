import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import { router } from "expo-router";
import { Input } from "@/src/components/Input";
import { useState } from "react";
import { Checkbox } from "react-native-paper";
import { BotaoPrimario } from "@/src/components/BotaoPrimario";
import { BotaoSecundario } from "@/src/components/BotaoSecundario";
import { TextSuportForm } from "@/src/components/textSuportForm";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
    colors,
    spacing,
    fontSize,
    borderRadius,
    borderWidth,
    sizes,
} from "@/src/theme/index";


export default function LoginScreen() {
    const handleLogin = () => {
        // No futuro, aqui vai a lógica de ir no MongoDB ver se a senha está certa.
        // Se der sucesso, nós SUBSTITUÍMOS (replace) o Login pela área logada:
        router.replace('/(tabs)');

    };
    const [checked, setChecked] = useState(false);

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={styles.title}>Entrar</Text>
                <View style={styles.form}>
                    <Input
                        label="Email"
                        placeholder="Digite seu email"
                        type="email"
                    />
                    <Input
                        label="Senha"
                        placeholder="Digite sua senha"
                        type="password"
                    />
                    <View style={styles.suporteContainer}>
                        <View style={styles.checkboxContainer}>
                            <Checkbox
                                status={checked ? "checked" : "unchecked"}
                                onPress={() => setChecked(!checked)}
                            />
                            <TextSuportForm children="Lembrar de mim" />
                        </View>

                        <TextSuportForm link="Esqueci minha senha" />
                    </View>
                    <BotaoPrimario title="Entrar" onPress={handleLogin} />
                    <Text style={styles.opcao}>Ou</Text>
                    <BotaoSecundario
                        icon={
                            <AntDesign
                                name="google"
                                size={sizes.iconSize}
                                color={colors.iconPrimary}
                            />
                        }
                        title="Entrar com o Google"
                        onPress={() => {}}
                    />
                    <TextSuportForm
                        children="Não tem uma conta?"
                        link="Crie uma agora"
                        onPress={() => router.push("/cadastroUsuario")}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgPrimary,
        justifyContent: "center",
        paddingHorizontal: spacing.lg,
    },
    title: {
        color: colors.textPrimary,
        fontSize: fontSize.xl,
        fontWeight: "bold",
        marginBottom: spacing.xxxl,
    },
    form: {
        width: sizes.full,
        backgroundColor: colors.bgInput,
        borderWidth: borderWidth.default,
        borderColor: colors.borderInput,
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xxxxl,
        paddingBottom: spacing.xxxl,
        gap: spacing.xxl,
        borderRadius: borderRadius.md,
        alignItems: "center",
    },
    suporteContainer: {
        width: sizes.full,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
  
    opcao: {
        color: colors.textOpcao,
        fontSize: fontSize.lg,
    },
});
