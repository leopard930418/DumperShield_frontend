const {
  useBabelRc,
  removeModuleScopePlugin,
  override,
} = require("customize-cra");
module.exports = override(useBabelRc(), removeModuleScopePlugin());