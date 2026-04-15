import {View, Text, StyleSheet} from "react-native";
import { colors, spacing, fontSize, fontWeight, borderRadius } from "@/src/theme";
import { BotaoPrimario } from "./BotaoPrimario";
import { CampoAviso } from "./CampoAviso";

export function CampoSalvaFoto({ title, subTitle, descricaoImportante }: { title: string; subTitle: string; descricaoImportante: string }) {  
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title}</Text>  
            <Text style={styles.subtitle} >{subTitle}</Text>  
            <CampoAviso title="Importante!" descricao={descricaoImportante} />
            <BotaoPrimario title="Abrir câmera" onPress={() => {}} style={{ marginTop: spacing.md }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        gap: spacing.xxl,
        backgroundColor: colors.bg200,
        alignItems: "center",
        padding: spacing.lg,
        borderWidth: 1,
        borderColor: colors.borders,
        borderRadius: borderRadius.md,   
        marginBottom: spacing.xxxxl,
    },
    title: {
        color: colors.textPrimary,
        fontSize: fontSize.md,
        fontWeight: fontWeight.bold,
    },
    subtitle: {
        color: colors.textPrimary,
        fontSize: fontSize.sm,
        fontWeight: fontWeight.regular,
    },
});