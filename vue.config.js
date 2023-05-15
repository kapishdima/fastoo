const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/app/variable.scss";
          @import "~@/app/fonts.scss";
          @import "~@/app/mixins.scss";
        `,
      },
    },
  },
});
