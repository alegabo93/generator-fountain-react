const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting() {
    this.fountainPrompting();
  },

  configuring() {
    this.mergeJson('package.json', {
      dependencies: {
        'axios': '^0.9.1',
        'es6-promise': '^3.1.2'
      }
    });

    if (this.props.js === 'typescript') {
      this.env.addToTsd = `"axios": "github:DefinitelyTyped/DefinitelyTyped/axios/axios.d.ts#bcd5761826eb567876c197ccc6a87c4d05731054",`;
    }
  },

  writing: {
    src() {
      [
        'src/index.js',
        'src/index.css',
        'src/app/footer.js',
        'src/app/header.js',
        'src/app/main.js',
        'src/app/title.js',
        'src/app/techs/tech.js',
        'src/app/techs/techs.js'
      ].map(file => this.copyTemplate(file, file));
    },

    techs() {
      this.prepareTechJson();
    }
  }
});