const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);
  config = rewireMobX(config, env);

  return config;
};