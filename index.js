var j2gq = require('json-to-graphql-query');
//import { jsonToGraphQLQuery } from 'json-to-graphql-query';

module.exports = function (source) {
  this.cacheable && this.cacheable();
  if (typeof source === 'string') { source = JSON.parse(source); }
  try {
    var res = j2gq.jsonToGraphQLQuery(source);
    return res;
  }
  catch (err) {
    this.emitError(err);
    return null;
  }
};
