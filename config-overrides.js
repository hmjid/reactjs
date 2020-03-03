// module.exports = (config) => {
//   return config
// }

const { override,addDecoratorsLegacy } = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy()
)