import {View, Text, StyleSheet} from "react-native";
import { colors, fontSize, fontWeight, spacing, borderRadius, borderWidth, sizes } from "@/src/theme/index";
import { Header } from "@/src/components/header";
import { Input } from "@/src/components/Input";
import Ionicons from '@expo/vector-icons/Ionicons';
import { BotaoPrimario } from "@/src/components/BotaoPrimario";


export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Input placeholder="Buscar..." type="search"/>
            <BotaoPrimario style={{marginVertical: 350}} title="Adicionar um checklist" onPress={() => {}} />
        </View>
    );

}

const styles = StyleSheet.create({
container: {
    backgroundColor: colors.bgPrimary,
    flex: 1,  
    alignItems: "center",
},
title: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: "bold",
},  
});