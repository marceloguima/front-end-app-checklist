import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TextInputProps,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { spacing, colors, boxShadow, fontSize} from "../theme";

type InputType = "email" | "password" | "user" | "search" | "none";

interface InputProps extends TextInputProps {
    label?: string;
    type?: InputType;
}

const iconMap = {
  email: 'email-outline',
  password: 'lock-outline',
  user: 'account-outline',
  search: 'magnify',
  none: undefined,
} as const;

export function Input({ label, type, style, ...rest }: { style?: any, type?: InputType, label?: string } & InputProps) {
    return ( 
        <View style={[styles.containerInput, style]}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={styles.input}>

                {iconMap[type] && (
                    <MaterialCommunityIcons
                        name={iconMap[type]}
                        size={20}
                        color={colors.bg300}
                    />
                )}
              
                <TextInput
                    style={styles.textInput}
                    {...rest}
                    placeholderTextColor={"#747474"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerInput: {
        width: "100%",
        // marginTop: spacing.md,
        height: 76,
        
    },
    label: {
        color: colors.textPrimary,
        fontSize: fontSize.md,
        fontWeight: "bold",
        marginBottom: 5,
    },
    input: {
        width: "100%",
        height: '70%',
        flexDirection: "row",
        backgroundColor: colors.bg100,
        borderColor: colors.borders,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 10,
        boxShadow: boxShadow.default,
    },
    textInput: {
        width: "100%",
        fontSize: 16,
        color: "#f0f0f0",
       
    },
});
