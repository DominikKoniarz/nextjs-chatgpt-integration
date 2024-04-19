import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"gradient-from": "rgba(255, 130, 188, 1)",
				"gradient-via": "rgba(130, 217, 255, 1)",
				"gradient-to": "rgba(61, 163, 178, 1)",
			},
		},
	},
	plugins: [],
};
export default config;
