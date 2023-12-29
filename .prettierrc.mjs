/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,
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
