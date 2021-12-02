module.exports = {
	purge : {
		content : [
			"./src/**/*.vue",
			"./src/**/*.js"
		],
		options : {
			whitelist : [],
			safelist  : [],
		},
	},
	darkMode : false, // or 'media' or 'class'
	theme    : {
		extend     : { colors: {}, },
		fontFamily : { system: [ "Oswald" ], },
	},
	variants : {},
	plugins  : [
		require( "@tailwindcss/forms" ),
		require( "@tailwindcss/aspect-ratio" )
	],
};
