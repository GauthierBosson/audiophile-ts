module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  printWidth: 80
};
