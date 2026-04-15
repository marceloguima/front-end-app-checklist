import {View, StyleSheet} from 'react-native';
import { colors, borderRadius, spacing } from '@/src/theme';

export function CardContainer({ children, style }: { children: React.ReactNode; style?: any }) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}   

const styles = StyleSheet.create({
    container: { width: "100%",
            paddingVertical: spacing.lg,
            paddingHorizontal: spacing.lg,
            backgroundColor: colors.bg200,
            borderWidth: 1,
            borderColor: colors.borders,
            borderRadius: borderRadius.md,
    }
});