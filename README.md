# json-to-graphql-query loader for webpack

[json-to-graphql-query](https://github.com/dupski/json-to-graphql-query) loader for [webpack](http://webpack.github.io/). 
If you want to convert from a YAML to a GraphQL Query, chain it with [yaml-loader](https://github.com/eemeli/yaml-loader).

## Installation

`npm install colus-img/json-to-graphql-query-loader`

## Usage

[Loaders | webpack](https://webpack.js.org/concepts/loaders/)

Simplest case would be:

``` javascript
var graphQLQuery = require("json-to-graphql-query-loader!./file.json");
// => returns as graphQL query
```

Case for from YAML file would be:

``` javascript
var graphQLQuery = require("json-to-graphql-query-loader!yaml-loader!./file.yml");
// => returns as graphQL query
```

This loader is also useful for getting a GraphQL Query from JSON. For example:

```js
// webpack.config.js
module: {
  loaders: [
    {
      test: /\.json$/,
      include: path.resolve('data'),
      loader: 'json-to-graphql-query',
    },
  ],
}
```

