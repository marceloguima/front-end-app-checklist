import {
    ScrollView,
    KeyboardAvoidingView,
    View,
    Text,
    StyleSheet,
} from "react-native";
import { borderRadius, colors, fontSize, fontWeight, spacing } from "@/src/theme/index";
import Constants from "expo-constants";
import { Input } from "@/src/components/Input";
import { OpcaoCheckBox } from "@/src/components/OpcaoCheckBox";

const statusBarHeight = Constants.statusBarHeight;

export default function TelaCheckList() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={styles.title}>
                Adicione cada detalhe e fique tranquilo
            </Text>
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
                <View style={styles.containerItens}>
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
                </View>
                <View style={styles.containerItens}>
                    <Text style={styles.subTitle}>Qual o motivo da visita à oficina?</Text>
                    <View style={styles.containerCheckboxes}>
                        <View style={styles.itensCheckBox}>
                        <OpcaoCheckBox label="Revisão" checked={true} />
                        <OpcaoCheckBox label="Troca de óleo" checked={false} />
                        </View>
                        <View style={styles.itensCheckBox}>
                        <OpcaoCheckBox label="Revisão" checked={true} />
                        <OpcaoCheckBox label="Troca de óleo" checked={false} />
                        </View>
                        <View style={styles.itensCheckBox}>
                        <OpcaoCheckBox label="Revisão" checked={true} />
                        <OpcaoCheckBox label="Troca de óleo" checked={false} />
                        </View>
                        <View style={styles.itensCheckBox}>
                        <OpcaoCheckBox label="Revisão" checked={true} />
                        <OpcaoCheckBox label="Troca de óleo" checked={false} />
                        </View>
                       
                    </View>
                    <Text style={styles.subTitle}>Obs:</Text>
                    <Input placeholder="Adicione observações relevantes..." label="Observações" type="text" multiline={true} numberOfLines={4} style={styles.textarea} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgPrimary,
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
    containerItens: {
        width: "100%",
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.lg,
        backgroundColor: colors.bgSecondary,
        borderWidth: 1,
        borderColor: colors.borders,
        borderRadius: borderRadius.md,
    },
    containerCheckboxes: {
        marginTop: spacing.xxxl,
    },
    itensCheckBox: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: spacing.md,
        marginBottom: spacing.md,
    },
    textarea:{
        textAlignVertical:"top",
        height: 100,
        
     
    }
     });
