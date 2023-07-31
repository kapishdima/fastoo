const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf|docx)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'files/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
  },
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
