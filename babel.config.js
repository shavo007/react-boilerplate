module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react'
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { modules: 'commonjs' }]]
    }
  },
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'transform-react-remove-prop-types',
    [
      'transform-imports',
      {
        'react-router': {
          transform: 'react-router/${member}',
          preventFullImport: true
        }
      }
    ]
  ]
};
