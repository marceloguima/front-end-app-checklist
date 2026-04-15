import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Pressable,
} from "react-native";
import { colors, spacing, fontSize } from "@/src/theme";
import { CardContainer } from "@/src/components/CardContainer";
import { Header } from "@/src/components/header";

export default function TelaHistorico() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Header />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    width: "100%",
                    paddingHorizontal: spacing.xl,
                    alignItems: "center",
                }}
            >
                <Text style={styles.info}>
                    Últimos checklists realizados. Toque para ver detalhes.
                </Text>
                <CardContainer style={{marginBottom: spacing.xxxl}}>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                    <Pressable style={styles.cardContent}>
                        <Text style={styles.cardText}>
                            Honda Civic - nbu1234
                        </Text>
                        <Text style={styles.cardText}>
                            Data: 01/01/2024
                        </Text>
                    </Pressable>
                </CardContainer>
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
        textAlign: "center",
        marginTop: spacing.xxxl,
    },
    cardContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: spacing.xxl,
        borderWidth: 1,
        borderColor: colors.borders,
        borderRadius: spacing.sm,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.lg,
        backgroundColor: colors.bg300,

    },
    cardText: {
        color: colors.textPrimary,
        fontSize: fontSize.md,
        marginBottom: spacing.sm,
    },
});
