const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontSize: {
      '20px': '20px', // Add your custom size here
    },
    colors: {
      'primary': '#0e518c',
      'primary-highlight': '#1161A7',
      'primary-light':'#1681DF',
      
      'secondary': '#DF3031',
      'secondary-highlight': '#E34F4F',
      'tertiary': '#',

    }
  },
};
export const darkMode = "class";
export const plugins = [nextui()];