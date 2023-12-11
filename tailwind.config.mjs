/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        plus: ['Plus Jakarta Sans', 'sans-serif'],
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
      boxShadow: {
        card: '0px 0px 10px #34486b63',
      },
      colors: {
        textColor: {
          primary: '#E4E9EF',
          secondary: '#717B88',
        },
        card: {
          primary: '#34486b63',
          background: 'rgba(43, 59, 87, 0.35)',
        },
        btn: {
          btnSecondary: '#0DA7AB',
          btnPrimary: '#1C576C',
        },
        baseColor: {
          background: '#10151D',
        },
        gradient: {
          pink: '#C525DD',
          purple: '#9624FF',
        },
      },
    },
  },
  plugins: [],
}
