import{View, Text, StyleSheet, Pressable} from 'react-native';
import { colors, fontSize, fontWeight, spacing, borderRadius, borderWidth, sizes } from "@/src/theme/index";
import Constants from 'expo-constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const statusBarHeight = Constants.statusBarHeight;


export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.perfil}><FontAwesome5 name="user-alt" size={24} color={colors.textPrimary} />
            <Text style={styles.title}>Olá david!</Text>
            </View>
            <Ionicons name="notifications" size={sizes.iconSize} color={colors.textPrimary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.bgSecondary,
        padding: spacing.md,
        borderBottomWidth: borderWidth.default,
        borderBottomColor: colors.borders,
        marginTop: statusBarHeight + 10,
        paddingHorizontal: spacing.xxl,
    },
    title: {
        color: colors.textPrimary,
        fontSize: fontSize.lg,
        fontWeight: fontWeight.bold,
    },
    perfil:{
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xl,    
    }
});