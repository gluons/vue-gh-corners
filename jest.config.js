const { defaults } = require("jest-config");

const { moduleFileExtensions } = defaults;

module.exports = {
	moduleFileExtensions: [...moduleFileExtensions, "vue"],
	transform: {
		"^.+\\.ts$": "babel-jest",
		"^.+\\.vue$": "vue-jest"
	}
};
