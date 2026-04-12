import {Text, StyleSheet} from 'react-native';
import { colors, fontSize, spacing } from '@/src/theme/index';


export function AvisoErroInput({ message }: { message: string }) {
    return (
        
            <Text style={styles.text}>{message}</Text>
        
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.error,       
        fontSize: fontSize.xs,
        marginTop: spacing.xs,
    },
});