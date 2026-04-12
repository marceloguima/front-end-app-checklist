// ===========================================
// TEMA — tokens de design (como variáveis CSS)
// ===========================================

// -------------------------------------------
// CORES
// -------------------------------------------
export const colors = {
    // Backgrounds
    bgPrimary: "#010A18",           // fundo principal das telas
    bgSecondary: "#010a18f1",           // fundo dos inputs e form
    bgButtonPrimario: "#1E90FF",    // fundo do botão primário
    bgButtonSecundario: "#3baffc17",// fundo do botão secundário

    // Bordas
    borders: "#a0c9f74d",       // borda dos inputs e form

    // Textos
    textPrimary: "#ffffff",         // textos principais
    textSecondary: "#f0f0f0",       // labels dos inputs
    textMuted: "#ffffff80",         // textos de suporte (opacidade 50%)
    textOpcao: "#ffffffda",         // texto "Ou" (opacidade 85%)
    textPlaceholder: "#747474",     // placeholder dos inputs
    textLink: "#1E90FF",            // links clicáveis

    // Ícones
    iconPrimary: "#1E90FF",         // ícones dos inputs

    // Feedback
    error: "#ff4d4d",               // mensagens de erro
} as const;

// -------------------------------------------
// TIPOGRAFIA
// -------------------------------------------
export const fontSize = {
    xs: 12,   // AvisoErroInput
    sm: 14,   // labels, TextSuportForm
    md: 16,   // inputs, botões
    lg: 18,   // texto "Ou"
    xl: 24,   // títulos das telas
} as const;

export const fontWeight = {
    regular: "400",
    bold: "bold",
} as const;

// -------------------------------------------
// ESPAÇAMENTOS
// -------------------------------------------
export const spacing = {
    xs: 4,    // marginTop do AvisoErroInput
    sm: 5,    // marginBottom do label
    md: 6,    // gap dentro do input
    lg: 10,   // gap geral, paddingHorizontal form, marginBottom inputContainer
    xl: 15,   // paddingVertical dos botões
    xxl: 20,  // gap do TextSuportForm, margin dos botões
    xxxl: 40, // paddingHorizontal botões, marginBottom título, paddingBottom form
    xxxxl: 60,// paddingTop do form
} as const;

// -------------------------------------------
// BORDAS
// -------------------------------------------
export const borderRadius = {
    sm: 8,    // inputs e botões
    md: 12,   // form container
} as const;

export const borderWidth = {
    default: 1,
} as const;

// -------------------------------------------
// TAMANHOS
// -------------------------------------------
export const sizes = {
    inputHeight: 50,
    iconSize: 24,
    iconFull: 28,
    iconDestak:36,
    full: "100%" as const,
} as const;