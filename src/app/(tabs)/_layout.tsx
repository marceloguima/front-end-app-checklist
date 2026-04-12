// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors, fontSize, fontWeight, sizes } from "@/src/theme";
import { StyleSheet, View } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: colors.bgSecondary, borderTopColor: colors.borders, height: 120,paddingBottom: 20 },
                tabBarActiveTintColor: colors.bgButtonPrimario,
                tabBarInactiveTintColor: colors.textPrimary,
                tabBarLabelStyle: { fontSize: fontSize.xs, fontWeight: fontWeight.bold },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Início",
                    tabBarIcon: ({ color,  focused }) => (
                        <Ionicons name="home" size={focused ? sizes.iconFull : sizes.iconSize} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="telaBusca"
                options={{
                    title: "Buscar",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name="search" size={focused ? sizes.iconFull : sizes.iconSize} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="telaCheckList"
                options={{
                    title: "CheckList",
                    tabBarIcon: ({ color, focused}) => (
                      <View style={[styles.botaoCentral, { backgroundColor: focused ? colors.bgButtonPrimario : colors.bgButtonSecundario }]}>
                        <Ionicons name="add-circle" size={sizes.iconDestak} color={focused ? colors.textPrimary : colors.textSecondary} />
                      </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="telaHistorico"
                options={{
                    title: "Histórico",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name="time" size={focused ? sizes.iconFull : sizes.iconSize} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="telaPerfil"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name="person" size={focused ? sizes.iconFull : sizes.iconSize} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    botaoCentral: {
        width: 50,  
        height: 50,
        backgroundColor: colors.bgButtonPrimario,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40, 
        borderWidth: 2,
        borderColor: colors.bgButtonPrimario,
    },
});