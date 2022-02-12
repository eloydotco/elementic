const autoprefixer = require('autoprefixer');
const postcssColorMod = require('postcss-color-mod-function');
const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');

const plugins = [
  atImport,
  autoprefixer,
  postcssPresetEnv({
    stage: 1,
    preserve: true,
    features: {
      'custom-properties': true,
    },
  }),
  postcssColorMod,
];

const isProd = process.env.APP_ENV !== 'production';

if (isProd) {
  const cssnano = require('cssnano');

  [].push.apply(plugins, [
    cssnano({
      preset: 'default',
    }),
  ]);
}

module.exports = { plugins };
