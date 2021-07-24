const { createJsonClient } = require(`restify-clients`);
const { config } = require(`../utils/Config`);

module.exports = createJsonClient({
  url: config.api.url,
});
