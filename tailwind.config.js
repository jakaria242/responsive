import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8300FF",
        secondary: "#1E1E1E",
        digitalcard: "rgba(255, 255, 255, 0.10)",
        digitalcardhover: "rgba(131, 0, 255, 0.10)",
        customerrelation:
          "linear-gradient(90deg, #8300FF 1.96%, #B566FF 102.1%)",
        inputbg: "rgba(255, 255, 255, 0.07)",
        inputborder: "rgba(255, 255, 255, 0.11)",
        corebg1: "rgba(45, 18, 126, 0.20)",
        corebg2: "rgba(131, 0, 255, 0.20)",
        sustainbg: "rgba(230,204,255,0.15)",
        whitevariantborder: "rgba(221, 221, 221, 0.87)",
        
      },
      fontSize: {
        xs: "0.75rem", // 12px font size
        sm: "0.875rem", // 14px font size
        base: "1rem", // 16px font size
        lg: "1.125rem", // 18px font size
        xl: "1.25rem", // 20px font size
        "2xl": "1.5rem", // 24px font size
        "3xl": "1.875rem", // 30px font size
        "4xl": "2.25rem", // 36px font size
        "5xl": "3rem", // 48px font size
        "6xl": "3.75rem", // 60px font size
        "7xl": "4.5rem", // 72px font size
        "8xl": "6rem", // 96px font size
        "9xl": "8rem", // 128px font size
        "80": "80px",
        "32": "32px",
        "13": "13px",
        "17": "17px",
        "22": "22px",
        "40": "40px",
      },
      maxWidth: {
        container: "1170px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "digital-service": "linear-gradient(to right,#8300FF,#B566FF)",
        // consultant: "url('/assets/ava1.png')",
        customerrelation:
          "linear-gradient(90deg, #8300FF 1.96%, #B566FF 102.1%)",
        jambg: 
          "linear-gradient(90deg, #BE3BF3 0%, #4A0899 26.56%, #6B3DFF 49.47%, #410794 77.59%, #8300FF 99.47%)",
        customersupport: "linear-gradient(90deg, #8300FF 1.96%, #B566FF 102.1%)",
      },
      screens: {
        // xxs: "450px",
          'xs': '400px',
          'sm': '576px',
          'md': '768px',
          'lg': '992px',
          'xl': '1200px',
          '2xl': '1400px',
          '3xl': '1600px',
          '4xl': '1920px'
      },
      boxShadow: {
        startup: "4px 4px 4px 0px rgba(115, 77, 229, 0.25)",
        business: "4px 4px 4px 0px #EEECF5",
        enterprise: "4px 4px 4px 0px #FEF1D4",
        customerbox: "0px 4px 14px 0px rgba(0, 0, 0, 0.08)",
        digitalproduct: "0px 10px 40px 0px rgba(48, 19, 134, 0.25)",
        digitalproducthover: "0px 10px 40px 0px rgba(48, 19, 134, 0.25)",
        creativeagency: "0px 10px 40px 0px rgba(48, 19, 134, 0.25)",
        contactshadown: "0 5px 10px rgba(115, 77, 229, 0.25)",
        sustain: "0px 40px 120px rgba(115, 77, 229, 0.10)",
      },
      animation: {
        fadeInOut: "fadeInOut 1s infinite alternate", // Define fadeInOut animation
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },

    container: {
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "3rem",
      //   md: "4rem",
      //   lg: "5rem",
      //   xl: "8rem",
      //   "2xl": "10rem",
      // },
    },
  },
  plugins: [],
};
export default config;