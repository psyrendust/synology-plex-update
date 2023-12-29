/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-packagejson"],
  printWidth: 80,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  overrides: [
    {
      files: "*.yml",
      options: {
        singleQuote: false,
      },
    },
  ],
};

export default config;
