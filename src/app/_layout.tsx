import { Stack } from "expo-router";
import { colors } from "@/src/theme";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import  Constants  from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;


export default function RootLayout() {
    return (
        <>
            <View style={{  backgroundColor: colors.bg300, height: statusBarHeight + 5, marginBottom: 0 }}>
                <StatusBar style="dark" />
            </View>
            <Stack screenOptions={{ headerShown: false }}>
                {/* Aqui definimos que o index (Login) é uma tela dessa Stack */}
                <Stack.Screen name="index" />

                <Stack.Screen name="cadastroUsuario" />
                {/* E aqui preparamos o terreno para a pasta onde ficarão as Abas (Tabs) */}
                <Stack.Screen name="(tabs)" />
            </Stack>
        </>
    );
}
