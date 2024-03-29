module.exports = {

  extends: [
    "airbnb-base",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:storybook/recommended"
  ],

  plugins: ["vue"],
  rules: {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [0, { "packageDir ": "./src/" }],
    "max-len": [
      "error",
      {
        code: 160,
        ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
        ignoreUrls: true,
      },
    ],
    "vue/multi-word-component-names": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", "svg"],
        moduleDirectory: ["node_modules", "src/"],
      },
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", "svg"],
        map: [["@", "./src"]],
      },
    },
  },
};
