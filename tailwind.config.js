module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        custom: "285px",
      },
      width: {
        container: "454px",
        "custom-18": "18px",
      },
      height: {
        container: "454px",
        "custom-18": "18px",
      },
      borderRadius: {
        custom: "8px",
      },
      borderColor: {
        DEFAULT: "rgba(222, 226, 230, 1)",
      },
      colors: {
        primary: {
          DEFAULT: "rgba(23, 162, 184, 1)",
          300: "rgba(23, 162, 184, 0.7)",
        },
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeOut: "fadeOut 0.5s forwards",
      },
      boxShadow: {
        custom: "1px 1px 3px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
