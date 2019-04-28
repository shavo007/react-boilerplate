# React boilerplate

> Showcases react, react router and lazy loading with webpack

[![CircleCI](https://circleci.com/gh/shavo007/react-boilerplate.svg?style=svg)](https://circleci.com/gh/shavo007/react-boilerplate)


## Webpack optimizations

Enabled these plugins:

*  "babel-plugin-transform-imports"
* "babel-plugin-transform-react-remove-prop-types
* PreloadWebpackPlugin

Reports are generated using webpack-bundle-analyser and bundle-buddy

To run bundle buddy `yarn build && npx bundle-buddy dist/*.map`

  


## Reading

- https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching
- https://developers.google.com/web/fundamentals/performance/optimizing-javascript/code-splitting/
- https://github.com/malchata/code-splitting-example
- [Webpack optimizations](https://github.com/GoogleChromeLabs/webpack-libs-optimizations)
- [Cost of  javascript](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)
- [Tree shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)
