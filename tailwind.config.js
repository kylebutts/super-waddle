module.exports = {
	darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{md,mdx,js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
    screens: {
      'prose': '80ch', // max-w-prose
      'md': '640px', // tablet
      'lg': '1024px', // computer
      'xl': '1280px', // large computer
    },
    maxWidth: {
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px',
      'prose': '80ch', // max-w-prose
    },
		extend: {
			fontFamily: {
				jetbrains: ["JetBrains Mono", "monospace"],
        space: ["Space Mono", "monospace"],
			},
      gridTemplateColumns: {
        'article': '1fr min(65ch, 100%) 1fr',
      },
      spacing: {
        // https://utopia.fyi/space/calculator?c=320,21,1.25,1140,24,1.414,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l
        'size-3xs': 'clamp(0.31rem, calc(0.29rem + 0.12vw), 0.38rem)',
        'size-2xs': 'clamp(0.69rem, calc(0.66rem + 0.12vw), 0.75rem)',
        'size-xs': 'clamp(1.00rem, calc(0.95rem + 0.24vw), 1.13rem)',
        'size-sm': 'clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)',
        'size-md': 'clamp(2.00rem, calc(1.90rem + 0.49vw), 2.25rem)',
        'size-lg': 'clamp(2.63rem, calc(2.48rem + 0.73vw), 3.00rem)',
        'size-xl': 'clamp(3.94rem, calc(3.72rem + 1.10vw), 4.50rem)',
        'size-2xl': 'clamp(5.25rem, calc(4.96rem + 1.46vw), 6.00rem)',
        'size-3xl': 'clamp(7.88rem, calc(7.44rem + 2.20vw), 9.00rem)',
        'size-3xs-2xs': 'clamp(0.31rem, calc(0.14rem + 0.85vw), 0.75rem)',
        'size-2xs-xs': 'clamp(0.69rem, calc(0.52rem + 0.85vw), 1.13rem)',
        'size-xs-sm': 'clamp(1.00rem, calc(0.80rem + 0.98vw), 1.50rem)',
        'size-sm-md': 'clamp(1.31rem, calc(0.95rem + 1.83vw), 2.25rem)',
        'size-md-lg': 'clamp(2.00rem, calc(1.61rem + 1.95vw), 3.00rem)',
        'size-lg-xl': 'clamp(2.63rem, calc(1.89rem + 3.66vw), 4.50rem)',
        'size-xl-2xl': 'clamp(3.94rem, calc(3.13rem + 4.02vw), 6.00rem)',
        'size-2xl-3xl': 'clamp(5.25rem, calc(3.79rem + 7.32vw), 9.00rem)',
      },
      // https://utopia.fyi/type/calculator?c=320,21,1.2,1140,24,1.5,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l
      fontSize: {
        'base': '1rem',
        'size--2': 'clamp(0.69rem, calc(0.69rem + 0.02vw), 0.70rem)',
        'size--1': 'clamp(0.83rem, calc(0.79rem + 0.20vw), 0.94rem)',
        'size-0':  'clamp(1.00rem, calc(0.90rem + 0.49vw), 1.25rem)',
        'size-1':  'clamp(1.20rem, calc(1.02rem + 0.91vw), 1.67rem)',
        'size-2':  'clamp(1.44rem, calc(1.14rem + 1.52vw), 2.22rem)',
        'size-3':  'clamp(1.73rem, calc(1.25rem + 2.40vw), 2.96rem)',
        'size-4':  'clamp(2.07rem, calc(1.34rem + 3.65vw), 3.95rem)',
        'size-5':  'clamp(2.49rem, calc(1.41rem + 5.41vw), 5.26rem)',








      },
			colors: {
				"mine-shaft": {
					50: "#f5f5f5",
					100: "#eaeaea",
					200: "#cbcbcb",
					300: "#acacac",
					400: "#6d6d6e",
					500: "#2f2f30",
					600: "#2a2a2b",
					700: "#232324",
					800: "#1c1c1d",
					900: "#171718",
				},
				aquamarine: {
					50: "#f4fffd",
					100: "#e9fffb",
					200: "#c7fff4",
					300: "#a5ffee",
					400: "#62ffe1",
					500: "#1EFFD4",
					600: "#1be6bf",
					700: "#17bf9f",
					800: "#12997f",
					900: "#0f7d68",
				},
				daisy: {
					50: "#fefcf6",
					100: "#fdfaec",
					200: "#faf2d0",
					300: "#f7e9b4",
					400: "#f1d97c",
					500: "#EBC944",
					600: "#d4b53d",
					700: "#b09733",
					800: "#8d7929",
					900: "#736221",
				},
				ruby: {
					50: "#faf4f3",
					100: "#f5e9e8",
					200: "#e6c9c5",
					300: "#d7a8a1",
					400: "#b8665b",
					500: "#9A2515",
					600: "#8b2113",
					700: "#741c10",
					800: "#5c160d",
					900: "#4b120a",
				},
				alice: {
					50: "#f3f8fa",
					100: "#e7f2f4",
					200: "#c3dde5",
					300: "#9fc9d5",
					400: "#58a1b5",
					500: "#107895",
					600: "#0e6c86",
					700: "#0c5a70",
					800: "#0a4859",
					900: "#083b49",
				},
				coral: {
					50: "#fef8f4",
					100: "#fef0e9",
					200: "#fcdbc8",
					300: "#fac5a6",
					400: "#f69964",
					500: "#F26D21",
					600: "#da621e",
					700: "#b65219",
					800: "#914114",
					900: "#773510",
				},
				kelly: {
					50: "#f9faf7",
					100: "#f3f4ee",
					200: "#e0e4d5",
					300: "#cdd4bb",
					400: "#a8b389",
					500: "#829356",
					600: "#75844d",
					700: "#626e41",
					800: "#4e5834",
					900: "#40482a",
				},
			},
		},
	},
	plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")
  ],
}
