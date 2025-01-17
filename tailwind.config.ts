import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|divider|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        "main":"#181818",
        "dark-c": "#262626",
        "green-50": "#9EFF00",
      },
    },
  },
  plugins: [nextui(), heroui()],
} satisfies Config;
