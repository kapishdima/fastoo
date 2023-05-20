const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/app/fonts.scss";
          @import "~@/app/variable.scss";
          @import "~@/app/mixins.scss";
        `,
      },
    },
  },
});
