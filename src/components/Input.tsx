import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TextInputProps,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { spacing, colors } from "../theme";

type InputType = "email" | "password" | "user" | "search" | "text";

interface InputProps extends TextInputProps {
    label?: string;
    type?: InputType;
}

const iconMap = {
  email: 'email-outline',
  password: 'lock-outline',
  user: 'account-outline',
  search: 'magnify',
  text: 'text',
} as const;

export function Input({ label, type, style, ...rest }: { style?: any, type?: InputType, label?: string } & InputProps) {
    return ( 
        <View style={[styles.containerInput, style]}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={styles.input}>
                <MaterialCommunityIcons
                    name={iconMap[type ?? "text"]}

                    size={24}
                    color="#1E90FF"
                />
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
    input: {
        width: "100%",
        height: '100%',
        flexDirection: "row",
        backgroundColor: colors.bgTerciario,
        borderColor: colors.borders,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 10,
    },
    containerInput: {
        width: "100%",
        marginTop: spacing.xxxl,
        height: 48,
        
    },
    label: {
        color: "#f0f0f0",
        fontSize: 14,
        marginBottom: 5,
    },
    textInput: {
        width: "100%",
        fontSize: 16,
        color: "#f0f0f0",
       
    },
});
