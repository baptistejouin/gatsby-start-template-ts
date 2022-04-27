import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

exports.onCreateWebpackConfig = ({ actions }: { actions: any }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
