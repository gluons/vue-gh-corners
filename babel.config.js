module.exports = function (api) {
	const env = process.env.NODE_ENV;

	api.cache.never();

	if (env === "test") {
		return {
			presets: [
				[
					"@babel/preset-env",
					{
						targets: {
							node: "current",
						},
					},
				],
				"@babel/preset-typescript"
			]
		};
	}

	return {
		presets: ["bili/babel"]
	};
};
