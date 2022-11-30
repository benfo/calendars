import { createStitches } from "@stitches/react";
import { gray, blue, red, green, slate, whiteA, blackA } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...whiteA,
      ...blackA,
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...slate,
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
    },
    fonts: {
      system: "system-ui",
    },
  },
  utils: {
    marginX: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
  },
});
