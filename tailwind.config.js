/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./ski/**/*.html",
        "./tik/**/*.html",
        "./assets/js/**/*.js"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                serif: ['"Amiri"', 'serif']
            },
            colors: {
                emeraldDark: '#064e3b',
                emeraldDeep: '#065f46',
                emeraldMid: '#047857',
                emeraldAccent: '#10b981',
                emeraldLight: '#ecfdf5',
                goldWarm: '#d97706',
                goldBright: '#f59e0b',
                creamPaper: '#fdfbf7',
                creamBorder: '#e7e0d0',
                creamDark: '#f3efe6',
                inkDark: '#1e293b',
                /* Alias warna yang dipakai modul interaktif */
                emeraldSoft: '#ecfdf5',
                emeraldBright: '#10b981',
                goldDeep: '#b45309',
                creamSand: '#f5f0e6',
                creamSoft: '#fffbeb',
                canvasLight: '#f8fafc'
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(14px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                turnPage: {
                    '0%': { opacity: '0.15', transform: 'perspective(1400px) rotateY(-8deg) translateX(8px)' },
                    '100%': { opacity: '1', transform: 'perspective(1400px) rotateY(0deg) translateX(0)' }
                },
                pageFlipIn: {
                    '0%': { opacity: '0', transform: 'perspective(1200px) rotateY(-6deg) scale(0.99)' },
                    '100%': { opacity: '1', transform: 'perspective(1200px) rotateY(0deg) scale(1)' }
                },
                popIn: {
                    '0%': { opacity: '0', transform: 'translateY(12px) scale(0.98)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
                },
                pulseGold: {
                    '0%, 100%': { boxShadow: '0 0 0 0 rgba(251, 191, 36, 0.45)' },
                    '50%': { boxShadow: '0 0 0 8px rgba(251, 191, 36, 0)' }
                },
                shakeWrong: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '20%, 60%': { transform: 'translateX(-5px)' },
                    '40%, 80%': { transform: 'translateX(5px)' }
                },
                fadeInPanel: {
                    '0%': { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            },
            animation: {
                'fade-up': 'fadeUp 0.55s cubic-bezier(0.16, 1, 0.3, 1) both',
                'flip-enter': 'turnPage 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'page-flip-in': 'pageFlipIn 0.42s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'pop': 'popIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-gold': 'pulseGold 2s infinite',
                'shake': 'shakeWrong 0.38s ease-in-out',
                'fade-in-panel': 'fadeInPanel 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }
        }
    },
    plugins: []
};
