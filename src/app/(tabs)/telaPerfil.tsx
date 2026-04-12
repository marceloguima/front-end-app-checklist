import {View, Text, StyleSheet} from "react-native";
import { colors } from "@/src/theme";

export default function TelaPerfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Tela de Perfil</Text>  
        </View>
    );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.bgPrimary,  
    },
    title: {
        color: colors.textPrimary,
        fontSize: 24,
        fontWeight: "bold",
    },
});