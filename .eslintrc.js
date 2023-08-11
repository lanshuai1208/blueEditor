module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-unused-vars": "warn",
  },
  //   parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      parser: "@babel/eslint-parser",
      //   parserOptions: {
      //     babelOptions: {
      //       configFile: path.resolve(__dirname, "./babel.config.js"),
      //     },
      //   },
      //   extends: ["airbnb-base"],
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      //   extends: ["airbnb-base", "plugin:@typescript-eslint/recommended"],
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        // babelOptions: {
        //   configFile: path.resolve(__dirname, "./babel.config.js"),
        // },
      },
      //   extends: ["airbnb-base", "plugin:vue/recommended"],
    },
  ],
};
