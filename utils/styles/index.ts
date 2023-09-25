import { globalFonts } from "../globalFonts";
import { COLORS as colors } from "./colors";

export const STYLED_CONFIG = {
  global: {
    "@fontFace": globalFonts,
    "html, body": {
      background: "#0E1414",
      overflowX: "hidden",
      scrollBehaviour: "smooth",
      width: "100vw",
    },

    ".custom-scroll::-webkit-scrollbar-track": {
      WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: "10px",
    },
    ".custom-scroll::-webkit-scrollbar": {
      width: "8px",
      backgroundColor: "yellow",
    },
    ".custom-scroll::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
    },
  },
};
