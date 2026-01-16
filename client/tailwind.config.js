module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#050505',
        'code-green': '#98C379',
        'code-blue': '#61AFEF',
        'code-purple': '#C678DD',
        'code-cyan': '#56B6C2',
        'code-orange': '#E5C07B',
        'code-red': '#E06C75',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Source Code Pro', 'monospace'],
      },
      backdropBlur: {
        'xl': '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
}
