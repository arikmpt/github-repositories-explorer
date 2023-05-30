const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@components/commons': path.resolve(__dirname, 'src/components/commons'),
      '@components/icons': path.resolve(__dirname, 'src/components/icons'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@constants/token': path.resolve(__dirname, 'src/constants/token'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
    plugins: ['@emotion/babel-plugin'],
  },
};