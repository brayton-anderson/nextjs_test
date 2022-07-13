module.exports = {
    content: [
        './pages/**/*.{ts,jsx,tsx,html,js}',
        './components/**/*.{ts,jsx,tsx,html,js}'
    ],
    theme: {
        letterSpacing: {
            tight: '-.015em'
        },
        extend: {
            height: {
                'half-screen': '50vh'
            },
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                pacifico: ['Pacifico', 'cursive'],
              },
        },
        // colors: {
        //   primary: "#21C9E0",
                                            
        //   secondary: "#F1F579",
                      
        //   accent: "#e8ef1a",
                      
        //   neutral: "#1E1E2F",
                      
        //   "base-100": "#FBFCFD",
                      
        //   info: "#4173E6",
                      
        //   success: "#44D5B0",
                      
        //   warning: "#F0CD75",
                      
        //   error: "#EC4B53",
        //   // 'white': '#ffffff',
        //   // 'tahiti': {
        //   //   100: '#cffafe',
        //   //   200: '#a5f3fc',
        //   //   300: '#67e8f9',
        //   //   400: '#22d3ee',
        //   //   500: '#06b6d4',
        //   //   600: '#0891b2',
        //   //   700: '#0e7490',
        //   //   800: '#155e75',
        //   //   900: '#164e63',
        //   // },
        //   // ...
        // },
        daisyui: {
          styled: true,
          base: true,
          utils: true,
          logs: true,
          rtl: false,
          prefix: "",
            themes: [
              {
                mytheme: {
                
                  // transparent: 'transparent',
                  // current: 'currentColor',
                    // Using modern `rgb`
                    primary: 'rgb(var(--color-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
                              
                  accent: "#e8ef1a",
                              
                  neutral: "#1E1E2F",
                              
                  "base-100": "#FBFCFD",
                              
                  info: "#4173E6",
                              
                  success: "#44D5B0",
                              
                  warning: "#F0CD75",
                              
                  error: "#EC4B53",
                  // 'white': '#ffffff',
                  // 'tahiti': {
                  //   100: '#cffafe',
                  //   200: '#a5f3fc',
                  //   300: '#67e8f9',
                  //   400: '#22d3ee',
                  //   500: '#06b6d4',
                  //   600: '#0891b2',
                  //   700: '#0e7490',
                  //   800: '#155e75',
                  //   900: '#164e63',
                  // },
                  // ...
                },
              },
            ],
          },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("daisyui")
    ],
  }
  