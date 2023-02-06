module.exports = {
  extends: [
    'xo-space',
    "xo-react/space"
  ],
  plugins: ['jest'],
  rules: {
    "object-curly-spacing": ['error', "always"],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'xo-typescript/space',
        "xo-react/space"
      ],
      rules: {
        "@typescript-eslint/object-curly-spacing": ['error', "always"],
      }
    }
  ],
}

// module.exports = {
//   extends: [
//     'rallycoding',
//     'eslint:recommended',
//     'plugin:react/recommended',
//   ],
//   rules: {
//     semi: ['error', 'always'],
//     'no-console': ['error', { allow: ['warn', 'log'] }],
//     'react/require-extension': 'off',
//     'arrow-body-style': 0,
//     'no-else-return': 0,
//     'no-unused-expressions': 0,
//     'brace-style': [1, 'stroustrup'],
//     'max-len': [1, 300],
//     'prefer-template': 0,
//     camelcase: ['error', {
//       allow: [
//         'UNSAFE_componentWillMount',
//         'UNSAFE_componentWillUpdate',
//         'UNSAFE_componentWillReceiveProps',
//       ]
//     }],
//     'react/prop-types': 0,
//     'react/sort-comp': [1, {
//       order: [
//         'instance-variables',
//         'lifecycle',
//         '/^on.+$/',
//         'render',
//         'everything-else',
//         'static-methods',
//       ]
//     }]
//   },
//   settings: {
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
//         moduleDirectory: ['node_modules', 'src/'],
//       }
//     },
//   },
//   plugins: [
//     'import',
//     'jest',
//     'typescript'
//   ],
//   env: {
//     browser: true
//   },
//   parser: 'babel-eslint'
// };
