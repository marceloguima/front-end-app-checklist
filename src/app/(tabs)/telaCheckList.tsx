import {
    ScrollView,
    KeyboardAvoidingView,
    View,
    Text,
    StyleSheet,
} from "react-native";
import {
    borderRadius,
    colors,
    fontSize,
    fontWeight,
    spacing,
} from "@/src/theme/index";
import Constants from "expo-constants";
import { Input } from "@/src/components/Input";
import { OpcaoCheckBox } from "@/src/components/OpcaoCheckBox";
import { CampoSalvaFoto } from "@/src/components/CampoSalvaFoto";
import { BotaoPrimario } from "@/src/components/BotaoPrimario";
import { Header } from "@/src/components/header";
import { CardContainer } from "@/src/components/CardContainer";

const statusBarHeight = Constants.statusBarHeight;

export default function TelaCheckList() {
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
                    gap: spacing.xxxl,
                }}
            >
                <Text style={styles.title}>
                    Adicione cada detalhe e fique tranquilo
                </Text>

                <CardContainer>
                    <Text style={styles.subTitle}>Dados do Veículo</Text>
                    <Input
                        placeholder="Ex: Honda Civic"
                        label="Modelo"
                        type="text"
                    />
                    <Input
                        placeholder="Ex: nbu1234"
                        label="Placa"
                        type="text"
                    />
                    <Input
                        placeholder="Ex: João"
                        label="Atendente/vendedor"
                        type="text"
                    />
                </CardContainer>

                <CardContainer>
                    <Text style={styles.subTitle}>
                        Qual o motivo da visita à oficina?
                    </Text>
                    <View style={styles.containerCheckboxes}>
                        <OpcaoCheckBox label="Revisão completa" />
                        <OpcaoCheckBox label="Penas troca de óleo" />
                        <OpcaoCheckBox label="Problemas com freio" />
                        <OpcaoCheckBox label="Barulho na suspensão" />
                        <OpcaoCheckBox label="Alinhamento e balanceamento" />
                        <OpcaoCheckBox label="Problemas elétricos" />
                        <OpcaoCheckBox label="Outros" />
                    </View>
                    <Input
                        placeholder="Adicione observações relevantes..."
                        label="Observações"
                        type="text"
                        multiline={true}
                        numberOfLines={4}
                        style={styles.textarea}
                    />
                </CardContainer>
                <CampoSalvaFoto
                    title="Painel do veículo"
                    subTitle="Fotos do painel do veículo"
                    descricaoImportante="Certifique-se de tirar 2 fotos nítidas do painel, 1 com o com a ignição ligada apenas, a outra com o motor ligado."
                />
                <CampoSalvaFoto
                    title="Integridade do veículo"
                    subTitle="O veículo possui danos estéticos?"
                    descricaoImportante="Se o veículo apresenta algum dano estético como riscos, amassados ou parabrisas trincados, tire fotos para documentar."
                />

                <BotaoPrimario
                    title="Salvar checklist"
                    onPress={() => {}}
                    style={{ marginBottom: spacing.xxxxl }}
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
        marginTop: statusBarHeight + 20,
        color: colors.textPrimary,
        fontSize: fontSize.xl,
        fontWeight: fontWeight.bold,
        textAlign: "center",
    },
    subTitle: {
        color: colors.textPrimary,
        fontSize: fontSize.lg,
        fontWeight: fontWeight.bold,
        marginBottom: spacing.md,
    },

    containerCheckboxes: {
        marginTop: spacing.xxxl,
    },
    itensCheckBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: spacing.md,
        marginBottom: spacing.md,
    },
    textarea: {
        textAlignVertical: "top",
        height: 140,
      
    },
});
