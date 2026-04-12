import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // Escondemos o header padrão porque você vai criar o seu próprio depois
    <Stack screenOptions={{ headerShown: false }}>
      
      {/* Aqui definimos que o index (Login) é uma tela dessa Stack */}
      <Stack.Screen name="index" />
      
      <Stack.Screen name="cadastroUsuario" />
      {/* E aqui preparamos o terreno para a pasta onde ficarão as Abas (Tabs) */}
      <Stack.Screen name="(tabs)" />
      
    </Stack>
  );
}