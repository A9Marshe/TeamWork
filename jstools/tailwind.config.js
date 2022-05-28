module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    content: [
            '../**/templates/*.html',
            '../**/templates/**/*.html'
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
          {
            mytheme: {
            
   "primary": "#057AFF",
            
   "secondary": "#463AA1",
            
   "accent": "#C149AD",
            
   "neutral": "#021431",
            
   "base-100": "#FFFFFF",
            
   "info": "#93E6FB",
            
   "success": "#80CED1",
            
   "warning": "#EFD8BD",
            
   "error": "#E58B8B",
            },
          },
        ],
      },
    variants: {},
    plugins: [require("daisyui"),
              require('@tailwindcss/forms')],
}