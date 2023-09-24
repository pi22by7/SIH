import type {Config} from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'croissantOne': ['Croissant One', 'sans-serif'],
                'BebasNeue': ['Bebas Neue', 'sans-serif'],
                'Montserrat': ['Montserrat', 'sans-serif'],
                'Inter': ['Inter', 'sans-serif'],
                'SourceSansPro': ['Source Sans Pro', 'sans-serif'],

            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            maxWidth: {
                container: '1340px', contentContainer: '1140px', containerSmall: '1024px', containerXs: '768px',
            }, screens: {
                xs: '280px',
                sm: '375px',
                sml: '500px',
                md: '667px',
                mdl: '768px',
                lg: '960px',
                lgl: '1024px',
                xl: `1280px`,
                xxl: `1440px`,
            }
        },
    },
    plugins: [],
}
export default config
