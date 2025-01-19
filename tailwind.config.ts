import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|drawer|divider|ripple|spinner|modal).js"
  ],
  theme: {
    extend: {
      colors: {
        p: "#a6a6a6",
        main: "#181818",
        "dark-c": "#262626",
        "green-50": "#9EFF00",
      },
      boxShadow: {
        insert: "inset 0px 0px 20px 20px #ffffff73",
      },
    },
  },
  plugins: [nextui(), heroui()],
} satisfies Config;
