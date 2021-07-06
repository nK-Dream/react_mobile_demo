const { override, fixBabelImports, addLessLoader,addPostcssPlugins } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions:{
            javascriptEnabled: true,
            modifyVars: { 
                '@brand-primary': '#E1251B',
                '@brand-Primary-tap': '#ac1d15'
            },
        }
    }),
    addPostcssPlugins([require('postcss-px2rem')({remUnit:375/10})])
);