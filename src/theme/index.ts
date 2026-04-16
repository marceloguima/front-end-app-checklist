// ===========================================
// TEMA — tokens de design (como variáveis CSS)
// ===========================================

// -------------------------------------------
// CORES
// -------------------------------------------
export const colors = {
    // Backgrounds
    bg100: "#fafafa",           // fundo principal das telas
    bg200: "#f3f3f3",           // fundo de containers e cards
    bg300: "#1681ec",           // fundo de abas e cards
        bg400: "#67b3ff",           // fundo de botões primários
    bg500: "#1E90FF80",       
    bg600: "#1e8fff27",      
    bg700: "#1e8fff1a",
    bg800: "#1e8fff0d", 
    bg900: "#85caff38",           // fundo de modais e dropdowns
    bg1000: "#fd4848",          // alerta de erro (vermelho)
    bg1001: "#fc61613a",          // alerta de sucesso (azul claro)


    bgButtonSecundario: "#3baffc17",// fundo do botão secundário

    // Bordas
    borders: "#dbdbdb",       // borda dos inputs e form

    // Textos
    textPrimary: "#2b2b2b",         // textos principais
    textSecondary: "#f0f0f0",       // labels dos inputs
    textButton: "#010714",         // texto dos botões
    textOpcao: "#ffffffda",         // texto "Ou" (opacidade 85%)
    textPlaceholder: "#747474",     // placeholder dos inputs
    textLink: "#1E90FF",            // links clicáveis

    // Ícones
    iconPrimary: "#1E90FF",         // ícones dos inputs

    // Feedback
  
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
    lg: 16,   // cards
    xl: 20,   // modais
    xxl: 24,  // dropdowns
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
    iconDestak:48,
    full: "100%" as const,
} as const;

export const boxShadow = {
    default: "0px 2px 4px rgba(0, 0, 0, 0.18)",
} as const;