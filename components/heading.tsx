import { styled } from "../theme/stitches.config";

export const Heading = styled("h2", {
  fontFamily: "$heading",
  fontWeight: "bold",
  variants: {
    size: {
      md: {
        fontSize: "$xl",
        lineHeight: 1.2,
      },
      lg: {
        fontSize: "$2xl",
        lineHeight: 1.33,
        "@lg": {
          fontSize: "$3xl",
          lineHeight: 1.2,
        },
      },
      xl: {
        fontSize: "$3xl",
        lineHeight: 1.33,
        "@lg": {
          fontSize: "$4xl",
          lineHeight: 1.2,
        },
      },
    },
  },
  defaultVariants: {
    size: "xl",
  },
});
