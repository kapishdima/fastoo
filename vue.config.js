const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/app/style/fonts.scss";
          @import "~@/app/style/variable.scss";
          @import "~@/app/style/mixins.scss";
        `,
      },
    },
  },
});
