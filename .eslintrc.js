module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				js: 'never',
			},
		],
		indent: [
			'error',
			'tab',
		],
		'linebreak-style': 'off',
		'no-tabs': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};
