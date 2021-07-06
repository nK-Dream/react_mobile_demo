const { override, fixBabelImports, addLessLoader,addPostcssPlugins } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions:{
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' },
        }
    }),
    addPostcssPlugins([require('postcss-px2rem')({remUnit:375/10})])
);