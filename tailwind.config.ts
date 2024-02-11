import typographyPlugin from "@tailwindcss/typography";

/**
 * The `rem` function converts pixel values to rem values, either for a single value or for an array of
 * values.
 * @param {RemInput} px - The parameter `px` can be either a string or an array of strings.
 * @returns The `rem` function can return three different types of values:
 */
type RemInput = string | string[];

const rem = (px: RemInput): string | string[] | undefined => {
  const convertToRem = (value: string): string => {
    const parsedValue = Number.parseInt(value);
    if (isNaN(parsedValue)) {
      throw new Error(`Invalid input: ${value} is not a number`);
    }
    return (parsedValue / 16).toFixed(2) + "rem";
  };

  if (typeof px === "string") {
    return convertToRem(px);
  } else if (Array.isArray(px)) {
    return px.map(convertToRem);
  }
};

/**
 * The function `v` returns a CSS variable with the given name.
 * @param variableName - The `variableName` parameter is a string representing the name of a CSS
 * variable.
 */
const v: (variableName: string) => string = (variableName) =>
  `var(--${variableName})`;

const fontSize = {
  caption: rem(["12px", "16px"]),
  body: rem(["14px", "20px"]),
  "body-lg": rem(["18px", "24px"]),
  subtitle: rem(["20px", "28px"]),
  "subtitle-lg": rem(["24px", "32px"]),
  title: rem(["28px", "36px"]),
  "title-lg": rem(["36px", "52px"]),
  "title-xl": rem(["52px", "68px"]),
  display: rem(["68px", "92px"])
};

const textColor = {
  white: "#ffffff",
  black: "#000000",
  primary: v("text-primary"),
  "solid-primary": v("text-solid-primary"),
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
  quinary: v("bg-solid-quinary")
};
const backgroundColor = {
  control: { DEFAULT: v("bg-control-default") },
  accent: {
    DEFAULT: v("bg-accent-default"),
    disabled: v("bg-accent-disabled")
  },
  solid: {
    primary: v("bg-solid-primary"),
    secondary: v("bg-solid-secondary"),
    tertiary: v("bg-solid-tertiary"),
    quaternary: v("bg-solid-quaternary"),
    quinary: v("bg-solid-quinary")
  },
  light: {
    primary: v("bg-light-primary"),
    secondary: v("bg-light-secondary"),
    tertiary: v("bg-light-tertiary"),
    "validation-error": v("bg-light-validation-error")
  },
  subtle: {
    secondary: v("bg-subtle-secondary"),
    tertiary: v("bg-subtle-tertiary")
  },
  button: {
    primary: v("bg-button-primary"),
    "primary-hover": v("bg-button-primary-hover")
  }
};

const backgroundImage = {
  "hero-pattern": "url('@src/assets/imgs/hero-pattern.png')",
  shape: "url('src/assets/svgs/shapes/hero-title-shape.svg')",
  "services-pattern":
    "url('@src/assets/svgs/shapes/services/services-bg-shape.svg')"
};

const borderColor = {
  text: {
    DEFAULT: v("border-text-default"),
    muted: v("border-text-muted")
  },
  surface: {
    DEFAULT: v("border-surface-default"),
    primary: v("border-surface-primary")
  },
  card: { DEFAULT: v("border-card-default") }
};

const colors = {
  system: {
    primary: "#f18733",
    attention: "#005fb7",
    "attention-bg": "#f6f6f6",
    success: "#0f7b0f",
    "success-bg": "#dff6dd",
    caution: "#9d5d00",
    "caution-bg": "#fff4ce",
    critical: "#c42b1c",
    "critical-bg": "#fde7e9"
  }
};
const borderRadius = {
  DEFAULT: rem("50px"),
  base: rem("4px"),
  full: rem("9999px")
};

const spacing = { 0.75: rem("3px"), 1.75: rem("7px"), 7.5: rem("30px") };

const boxShadow = { tooltip: v("shadow-tooltip"), flyout: v("shadow-flyout") };

const gridAutoRows = { 17.5: rem("70px") };
const gridAutoColumns = { 20: rem("80px") };

const transitionTimingFunction = { point: "cubic-bezier(0.55, 0.55, 0, 1)" };

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/assets/imgs/**/*"],
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
      backgroundImage
    }
  }
};
