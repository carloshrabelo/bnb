/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        xxs: "0.4rem",
        xs: "0.8rem",
        sm: "1.6rem",
        m: "2.4rem",
        md: "3.2rem",
        lg: "4.8rem",
        xlg: "6.4rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark",
      "synthwave",
      "autumn",
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["[data-theme=synthwave]"],
          primary: "#B154F0",
          secondary: "#16073a",
          accent: "#37CDBE",
          neutral: "#3D4451",
          info: "#3ABFF8",
          success: "#33cb33",
          warning: "#ffa700",
          error: "#DF4C21",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
