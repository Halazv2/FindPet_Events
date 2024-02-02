import typographyPlugin from "@tailwindcss/typography";

/**
 * The `rem` function converts pixel values to rem values in JavaScript.
 * @param px - The `px` parameter represents the value in pixels that you want to convert to rem units.
 * @returns The function `rem` returns a value in `rem` units. If the input `px` is a string, it
 * converts the string to a number, divides it by 16, and returns the result concatenated with the
 * string "rem". If the input `px` is an array, it applies the `rem` function to each element of the
 * array and returns an array of the converted values
 */
const rem = (px) => {
  if (typeof px === "string") {
    return Number.parseFloat((Number.parseInt(px) / 16).toString()) + "rem";
  } else if (Array.isArray(px)) {
    return px.map(rem);
  }
};

/**
 * The function `v` returns a CSS variable with the given name.
 * @param variableName - The `variableName` parameter is a string representing the name of a CSS
 * variable.
 */
const v = (variableName) => `var(--${variableName})`;

const fontSize = {
  caption: rem(["12px", "16px"]),
  body: rem(["14px", "20px"]),
  "body-lg": rem(["18px", "24px"]),
  subtitle: rem(["20px", "28px"]),
  "subtitle-lg": rem(["24px", "32px"]),
  title: rem(["28px", "36px"]),
  "title-lg": rem(["36px", "52px"]),
  "title-xl": rem(["52px", "68px"]),
  display: rem(["68px", "92px"]),
};

const textColor = {
  white: "#ffffff",
  black: "#000000",
  primary: v("text-primary"),
  secondary: v("text-secondary"),
  tertiary: v("text-tertiary"),
  disabled: v("text-disabled"),
  muted: v("text-muted"),
  danger: v("text-danger"),
  "muted-dark": v("text-muted-dark"),
  "validation-error": v("text-validation-error"),
  "validation-warning": v("text-validation-warning"),
  "validation-success": v("text-validation-success"),
  senary: v("bg-solid-senary"),
  quinary: v("bg-solid-quinary"),
};
const backgroundColor = {
  control: { DEFAULT: v("bg-control-default") },
  accent: {
    DEFAULT: v("bg-accent-default"),
    disabled: v("bg-accent-disabled"),
  },
  solid: {
    primary: v("bg-solid-primary"),
    secondary: v("bg-solid-secondary"),
    tertiary: v("bg-solid-tertiary"),
    quaternary: v("bg-solid-quaternary"),
    quinary: v("bg-solid-quinary"),
  },
  light: {
    primary: v("bg-light-primary"),
    secondary: v("bg-light-secondary"),
    tertiary: v("bg-light-tertiary"),
    "validation-error": v("bg-light-validation-error"),
  },
  subtle: {
    secondary: v("bg-subtle-secondary"),
    tertiary: v("bg-subtle-tertiary"),
  },
  button: {
    primary: v("bg-button-primary"),
    "primary-hover": v("bg-button-primary-hover"),
  },
};

const borderColor = {
  surface: {
    DEFAULT: v("border-surface-default"),
    primary: v("border-surface-primary"),
  },
  card: { DEFAULT: v("border-card-default") },
};

const colors = {
  system: {
    attention: "#005fb7",
    "attention-bg": "#f6f6f6",
    success: "#0f7b0f",
    "success-bg": "#dff6dd",
    caution: "#9d5d00",
    "caution-bg": "#fff4ce",
    critical: "#c42b1c",
    "critical-bg": "#fde7e9",
  },
};
const borderRadius = {
  DEFAULT: rem("50px"),
  base: rem("4px"),
  full: rem("9999px"),
};

const spacing = { 0.75: rem("3px"), 1.75: rem("7px"), 7.5: rem("30px") };

const boxShadow = { tooltip: v("shadow-tooltip"), flyout: v("shadow-flyout") };

const gridAutoRows = { 17.5: rem("70px") };
const gridAutoColumns = { 20: rem("80px") };

const transitionTimingFunction = { point: "cubic-bezier(0.55, 0.55, 0, 1)" };

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  plugins: [typographyPlugin],
  theme: {
    fontSize,
    textColor,
    extend: {
      spacing,
      backgroundColor,
      borderColor,
      colors,
      borderRadius,
      boxShadow,
      gridAutoRows,
      gridAutoColumns,
      transitionTimingFunction,
    },
  },
};
