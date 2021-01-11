module.exports = {
  parser: 'babel-eslint',
  extends: [
    'react-app',
    'airbnb-base',
    'airbnb/rules/react',
  ],
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    'arrow-body-style': 'off',
    'linebreak-style': 'off',
    'max-len': [2, 120, 2],
    'no-unused-vars': 'warn',
    'react/no-unused-state': 'warn',
    'no-tabs': 'warn',
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', {
      js: 'never',
      ts: 'never',
    }],
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: true,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
    'no-console': 'off',
    radix: 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-did-update-set-state': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-unresolved': 'off',
    'react/no-danger': 'off',
  },
};
