import colors from 'tailwindcss/colors' 
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography' 
 
export default {
    content: [
        './resources/**/*.blade.php',
        './vendor/filament/**/*.blade.php', 
    ],

    theme: {
        extend: {
            colors: {
                danger : {  DEFAULT: '#E74C3C',  50: '#FBE2DF',  100: '#F9D1CD',  200: '#F4B0A9',  300: '#F08F85',  400: '#EB6D60',  500: '#E74C3C',  600: '#D12B1A',  700: '#9F2114',  800: '#6D160D',  900: '#3B0C07'},
                success: {  DEFAULT: '#10B981',  50: '#8CF5D2',  100: '#79F3CB',  200: '#53F0BC',  300: '#2EEDAE',  400: '#13DF9B',  500: '#10B981',  600: '#0C855D',  700: '#075239',  800: '#031E15',  900: '#000000'},
                warning: {  DEFAULT: '#F59E0B',  50: '#FCE4BB',  100: '#FBDCA8',  200: '#FACD81',  300: '#F8BD59',  400: '#F7AE32',  500: '#F59E0B',  600: '#C07C08',  700: '#8A5906',  800: '#543603',  900: '#1E1401'},
                primary: {  
                DEFAULT: '#e74c3c',  
                '50': '#fffaf5', 
                '100': '#fcf4eb', 
                '200': '#fae0cd', 
                '300': '#f5c6ab', 
                '400': '#f09073', 
                '500': '#e74c3c', 
                '600': '#d14030', 
                '700': '#ad2d21', 
                '800': '#8c2016', 
                '900': '#69130d', 
                '950': '#420905'},
                info   : {  
                    DEFAULT: '#4a4a4a',  
                    '50': '#f5f5f5', 
                    '100': '#ededed', 
                    '200': '#d1d1d1', 
                    '300': '#b8b8b8', 
                    '400': '#808080', 
                    '500': '#4a4a4a', 
                    '600': '#423c3c', 
                    '700': '#382a2a', 
                    '800': '#2b1a1a', 
                    '900': '#210f0f', 
                    '950': '#140606'
                },
                nomiwhite   : {  
                    DEFAULT: '#ffffff',  
                    '50': '#ffffff', 
                    '100': '#ffffff', 
                    '200': '#ffffff', 
                    '300': '#ffffff', 
                    '400': '#ffffff', 
                    '500': '#ffffff', 
                    '600': '#e6cfcf', 
                    '700': '#bf8f8f', 
                    '800': '#995c5c', 
                    '900': '#733434', 
                    '950': '#4a1515'
                },
                grey   : {  
                    DEFAULT: '#c0c0c0',
                    '50': '#fcfcfc', 
                    '100': '#fafafa', 
                    '200': '#f0f0f0', 
                    '300': '#e6e6e6', 
                    '400': '#d4d4d4', 
                    '500': '#c0c0c0', 
                    '600': '#ad9c9c', 
                    '700': '#8f6b6b', 
                    '800': '#734545', 
                    '900': '#572727', 
                    '950': '#381010'
                },
                lightgrey  : {  
                    DEFAULT: '#e9e9e9',
                    '50': '#ffffff', 
                    '100': '#fcfcfc', 
                    '200': '#fafafa', 
                    '300': '#f5f5f5', 
                    '400': '#f0f0f0', 
                    '500': '#e9e9e9', 
                    '600': '#d1bcbc', 
                    '700': '#ad8282', 
                    '800': '#8c5454', 
                    '900': '#692f2f', 
                    '950': '#421313'
                },
            },
        },
    },

    plugins: [
        forms, 
        typography, 
    ],
}
