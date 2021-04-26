module.exports = {
  publicPath: "/payment-terminal/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
};
