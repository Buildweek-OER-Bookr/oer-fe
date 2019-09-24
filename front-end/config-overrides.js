const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': 'rgba(0, 63, 145, 1)',
			'@info-color': 'rgba(0, 63, 145, 1)',
			'@processing-color': 'rgba(0, 63, 145, 1)',
			'@secondary-color': 'rgba(107, 127, 215, 1)',
			'@error-color': 'rgba(237, 37, 78, 1)',
			'@highlight-color': 'rgba(237, 37, 78, 1)',
			'@normal-color': 'rgba(244, 250, 255, 1)'
		},
	}),
);


/*

// -------- Colors -----------
@primary-color: @blue-6;
@info-color: @blue-6;
@success-color: @green-6;
@processing-color: @blue-6;
@error-color: @red-6;
@highlight-color: @red-6;
@warning-color: @gold-6;
@normal-color: #d9d9d9;
@white: #fff;
@black: #000;


@text-color: fade(@black, 65%);
@text-color-secondary: fade(@black, 45%);
@text-color-inverse: @white;
@icon-color: inherit;
@icon-color-hover: fade(@black, 75%);
@heading-color: fade(#000, 85%);
@heading-color-dark: fade(@white, 100%);
@text-color-dark: fade(@white, 85%);
@text-color-secondary-dark: fade(@white, 65%);
@text-selection-bg: @primary-color;
*/