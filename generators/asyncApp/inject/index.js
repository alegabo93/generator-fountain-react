const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  configuring() {
    this.mergeJson('package.json', {
      dependencies: {
        'classnames': '^2.2.5',
        'react-dom': '^15.4.2',
        'react-redux': 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.2/react-redux.js',
        'redux': 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.js',
        'es6-shim': '^0.35.3',
        'axios': '^0.15.3',
        'jquery': '^3.1.1',
        'react': '^15.0.1',
        'react-router': '^2.4.0',
        'react-router-redux': '^4.0.8',
        'redux-logger': '^2.8.0',
        'redux-promise-middleware': '^4.2.0',
        'redux-thunk': '^2.2.0',
        'prop-types': '^15.5.10'
      },
      devDependencies: {
        '@types/classnames': '^0.0.32',
        '@types/react-redux': '^4.4.36',
        'babel-plugin-check-es2015-constants': '^6.22.0',
        'babel-plugin-transform-class-properties': '^6.22.0',
        'babel-plugin-transform-decorators': '^6.22.0',
        'babel-plugin-transform-decorators-legacy': '^1.3.4',
        'babel-plugin-transform-es2015-arrow-functions': '^6.22.0',
        'babel-plugin-transform-es2015-block-scoped-functions': '^6.22.0',
        'babel-plugin-transform-es2015-block-scoping': '^6.22.0',
        'babel-plugin-transform-es2015-destructuring': '^6.22.0',
        'babel-plugin-transform-es2015-for-of': '^6.22.0',
        'babel-plugin-transform-es2015-parameters': '^6.22.0',
        'babel-plugin-transform-es2015-spread': '^6.22.0',
        'babel-plugin-transform-object-rest-spread': '^6.22.0',
        'babel-plugin-transform-react-constant-elements': '^6.22.0',
        'babel-preset-stage-3': '^6.24.1',
        'babel-preset-es2015': '^6.2.0',
        'babel-preset-react': '^6.1.18',
        'react-bootstrap': '^0.30.8',
        'bootstrap-loader': '^1.0.10',
        'bootstrap-sass': '^3.3.7',
        'extract-text-webpack-plugin': '2.0.0-beta.3',
        'file-loader': '^0.10.0',
        'font-awesome': '^4.7.0',
        'font-awesome-loader': '^1.0.1',
        'install': '^0.8.4',
        'npm': '^4.1.2',
        'resolve-url-loader': '^1.6.1',
        'url-loader': '^0.5.7',
        'redux-devtools': '^3.3.2',
        'redux-devtools-dock-monitor': '^1.1.1',
        'redux-devtools-log-monitor': '^1.2.0'
      }
    });
  },

  writing: {
    src() {
      const src = [
        // babel, gulp and bootstrap config
        '.babelrc',
        '.bootstraprc',

        // Webpack config
        'conf/webpack.conf.js',
        'conf/webpack-dist.conf.js',

        // Files config
        'src/index.html',
        'src/index.js',
        'src/index.css',
        'src/routes.js',

        'src/app/styles/bootstrap/_customizations.scss',
        'src/app/styles/bootstrap/_pre-customizations.scss',
        'src/app/styles/index.scss',

        'src/app/actions/Posts.js',

        'src/app/components/Posts.js',

        'src/app/constants/Constants.js',
        'src/app/constants/Constants.dev.js',
        'src/app/constants/constants.prod.js',

        'src/app/containers/App.js',
        'src/app/containers/PostsContainer.js',
        'src/app/containers/Root.js',

        'src/app/reducers/index.js',
        'src/app/reducers/Posts.js'
      ];
      if (this.options.js === 'typescript') {
        src.push('src/app/assign.js');
      }
      src.map(file => this.copyTemplate(file, file));
    }
  }
});
