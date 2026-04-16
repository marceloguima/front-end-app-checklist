import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";
import { router } from "expo-router";
import { TextSuportForm } from "../components/textSuportForm";
import { Input } from "@/src/components/Input";
import { BotaoPrimario } from "@/src/components/BotaoPrimario";
import { BotaoSecundario } from "@/src/components/BotaoSecundario";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AvisoErroInput } from "@/src/components/AvisoErroInput";
import { useState } from "react";

export default function CadastroUsuario() {
    const [avisoErroNome, setAvisoErroNome] = useState("");
    const [avisoErroEmail, setAvisoErroEmail] = useState("");
    const [avisoErroSenha, setAvisoErroSenha] = useState("");

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const validateName = (nome: string) => {
        if (nome.trim() === "") {
            setAvisoErroNome("* O campo de nome é obrigatório. *");
            return false;
        } else if (nome.length < 2) {
            setAvisoErroNome("* O nome deve ter pelo menos 2 caracteres. *");
            return false;
        } else {
            setAvisoErroNome("");
            return true;
        }
    };

    const validateEmail = (email: string) => {
        if (email.trim() === "") {
            setAvisoErroEmail("* O campo de email é obrigatório. *");
            return false;
        } else if (!email.includes("@") || !email.includes(".")) {
            setAvisoErroEmail("* Por favor, insira um email válido. *");
            return false;
        } else {
            setAvisoErroEmail("");
            return true;
        }
    };

    const regexSenha =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#\-_=+^<>~|/\\{}[\]()])[A-Za-z\d@$!%*?&#\-_=+^<>~|/\\{}[\]()]{6,}$/;

    const isSenhaValida = regexSenha.test(senha);
    const validateSenha = (senha: string) => {
        if (senha.trim() === "") {
            setAvisoErroSenha("* O campo de senha é obrigatório. *");
            return false;
        } else if (senha.length < 6) {
            setAvisoErroSenha("* A senha deve ter pelo menos 6 caracteres. *");
        } else if (!isSenhaValida) {
            setAvisoErroSenha(
                "* A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais. *",
            );
            return false;
        } else {
            setAvisoErroSenha("");
            return true;
        }
    }
        const handleCreateAccount = () => {
            // No futuro, aqui vai a lógica de criar a conta no MongoDB.
            // Se der sucesso, nós SUBSTITUÍMOS (replace) o CadastroUsuario pela área logada:
            // router.replace('/(tabs)');
            validateName(nome);
            validateEmail(email);
            validateSenha(senha);
        };
    
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.title}>Criar Conta</Text>

                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Input
                                label="Nome"
                                placeholder="Digite seu primeiro nome"
                                type="user"
                                value={nome}
                                onChangeText={setNome}
                            />
                            <AvisoErroInput message={avisoErroNome} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                label="Email"
                                placeholder="Digite seu email"
                                type="email"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <AvisoErroInput message={avisoErroEmail} />
                        </View>

                        <View style={styles.inputContainer}>
                            <Input
                                label="Senha"
                                placeholder="Crie uma senha segura"
                                type="password"
                                value={senha}
                                onChangeText={setSenha}
                            />
                            <AvisoErroInput message={avisoErroSenha} />
                        </View>
                        <BotaoPrimario
                            title="Criar Conta"
                            onPress={handleCreateAccount}
                        />
                        <Text style={styles.opcao}>Ou</Text>
                        <BotaoSecundario
                            icon={
                                <AntDesign
                                    name="google"
                                    size={24}
                                    color="#1E90FF"
                                />
                            }
                            title="Entrar com o Google"
                            onPress={() => {}}
                        />
                        <TextSuportForm
                            children="Já tem uma conta?"
                            link="Faça login"
                            onPress={() => router.push("/")}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#010A18",
        paddingHorizontal: 10,
    },
    title: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 40,
    },
    form: {
        width: "100%",
        backgroundColor: "#6edcfd14",
        borderWidth: 1,
        borderColor: "#6edcfd20",
        paddingHorizontal: 10,
        paddingTop: 60,
        paddingBottom: 40,
        borderRadius: 12,
        alignItems: "center",
    },
    inputContainer: {
        width: "100%",
    },
    suporteContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    opcao: {
        color: "#ffffffda",
        fontSize: 18,
    },
});
