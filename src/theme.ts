import { createTheme, defaultDarkModeOverride } from '@aws-amplify/ui-react';

const theme = createTheme({
  name: 'my-theme',
  overrides: [defaultDarkModeOverride],
});

// const theme = createTheme({
//     name: 'my-theme',
//     tokens: {

//         fonts: {
//             default: {
//                 variable: "'DM Sans'",
//                 static: "'DM Sans'"
//             }
//         },
//         colors: {
//             neutral: {
//                 '100': '#0C001F',
//                 '90': '#180D2A',
//                 '80': '#342A46',
//                 '60': '#4E465B',
//                 '40': '#9A94A5',
//                 '20': '#DAD2DA',
//                 '10': '#ECE9EC',
//                 // @ts-ignore
//                 '5': '#F8F7F8',
//             },
//             teal: {
//                 100: '#00302E',
//                 90: '#005451',
//                 80: '#00837F',
//                 60: '#00A8A3',
//                 40: '#52E7E1',
//                 20: '#AAFFFC',
//                 10: '#E1FFFE',
//             },
//             pink: {
//                 100: '#590024',
//                 90: '#B6034B',
//                 80: '#E62472',
//                 60: '#F84D92',
//                 40: '#FF70A9',
//                 20: '#FFB7D4',
//                 10: '#FFDFEC',
//             },
//             brand: {
//                 primary: {
//                     100: '{colors.pink.100}',
//                     90: '{colors.pink.90}',
//                     80: '{colors.pink.80}',
//                     60: '{colors.pink.60}',
//                     40: '{colors.pink.40}',
//                     20: '{colors.pink.20}',
//                     10: '{colors.pink.10}',
//                 },
//             },
//             background: {
//                 secondary: '{colors.neutral.5}',
//             },
//             border: {
//                 primary: '{colors.neutral.20}',
//                 secondary: '{colors.neutral.10}',
//                 active: '{colors.brand.primary.80}',
//                 focus: '{colors.brand.primary.40}',
//             },
//             font: {
//                 primary: '{colors.neutral.100}',
//                 secondary: '{colors.neutral.80}',
//                 tertiary: '{colors.neutral.60}',
//             },
//         },
//         components: {
//             button: {
//                 primary: {
//                     backgroundColor: '{colors.brand.primary.10}',
//                     color: '{colors.brand.primary.90}',
//                     borderColor: '{colors.brand.primary.40}',
//                     _hover: {
//                         backgroundColor: '{colors.brand.primary.20}',
//                         color: '{colors.brand.primary.100}',
//                         borderColor: '{colors.brand.primary.40}',
//                     },
//                 },
//             },
//             sliderfield: {
//                 track: {
//                     backgroundColor: '{colors.background.tertiary}',
//                 },
//                 range: {
//                     backgroundColor: '{colors.brand.primary.40}',
//                 },
//                 thumb: {
//                     borderColor: '{colors.brand.primary.40}',
//                 }
//             }
//         },
//     },
//     overrides: [
//         {
//             colorMode: 'dark',
//             tokens: {
//                 components: {
//                     button: {
//                         _hover: {
//                             backgroundColor: '{colors.brand.primary.100}',
//                             color: '{colors.white}',
//                             borderColor: '{colors.brand.primary.60}',
//                         },
//                         _active: {
//                             backgroundColor: '{colors.brand.primary.60}',
//                             color: '{colors.white}',
//                             borderColor: '{colors.brand.primary.60}',
//                         },
//                         _focus: {
//                             backgroundColor: '{colors.brand.primary.100}',
//                             color: '{colors.white}',
//                             borderColor: '{colors.brand.primary.60}',
//                         },
//                         primary: {
//                             backgroundColor: '{colors.brand.primary.90}',
//                             color: '{colors.brand.primary.10}',
//                             // borderColor: '{colors.brand.primary.60}'
//                         },
//                         link: {
//                             _hover: {
//                                 backgroundColor: '{colors.brand.primary.100}',
//                                 color: '{colors.white}',
//                                 // borderColor: '{colors.brand.primary.60}'
//                             },
//                             _active: {
//                                 backgroundColor: '{colors.brand.primary.90}',
//                                 color: '{colors.white}',
//                                 // borderColor: '{colors.brand.primary.60}'
//                             },
//                         },
//                     },
//                     fieldcontrol: {
//                         _focus: {
//                             borderColor: '{colors.brand.primary.60}',
//                         },
//                     },
//                 },
//                 colors: {
//                     background: {
//                         primary: '{colors.neutral.100}',
//                         secondary: '{colors.neutral.90}',
//                         tertiary: '{colors.neutral.80}',
//                     },
//                     font: {
//                         primary: '{colors.white}',
//                         secondary: '{colors.neutral.10}',
//                         tertiary: '{colors.neutral.20}',
//                         interactive: '{colors.brand.primary.40}',
//                     },
//                     border: {
//                         primary: '{colors.neutral.60}',
//                         secondary: '{colors.neutral.80}',
//                         tertiary: '{colors.neutral.90}',
//                     },
//                 },
//             },
//         },
//     ],
// });

export { theme };
