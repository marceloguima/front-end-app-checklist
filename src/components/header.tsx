import{View, Text, StyleSheet, Pressable} from 'react-native';
import { colors, fontSize, fontWeight, spacing, borderRadius, borderWidth, sizes } from "@/src/theme/index";
import Constants from 'expo-constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const statusBarHeight = Constants.statusBarHeight;


export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.perfil}><FontAwesome5 name="user-alt" size={24} color={colors.textSecondary} />
            <Text style={styles.title}>Olá david!</Text>
            </View>
            <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons name="notifications" size={sizes.iconSize} color={colors.textSecondary} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.bg300,
        padding: spacing.md,
        paddingHorizontal: spacing.xxl,
        borderBottomRightRadius: borderRadius.xl,
        borderBottomLeftRadius: borderRadius.xl,
    },
    title: {
        color: colors.textSecondary,
        fontSize: fontSize.lg,
        fontWeight: fontWeight.bold,
    },
    perfil:{
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xl,    
    },
    button: {
        padding: spacing.lg,
        borderRadius: borderRadius.sm,
        backgroundColor: colors.bg900,
    },
});