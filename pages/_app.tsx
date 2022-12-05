import { globalCss } from "@stitches/react";
import { AppProps } from "next/app";

const cssReset: { [K: string]: any } = {
  "*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))":
    {
      all: "unset",
      display: "revert",
    },
  "*, *::before, *::after": { boxSizing: "border-box" },
  "a, button": {
    cursor: "revert",
  },
  "ol, ul, menu": {
    listStyle: "none",
  },
  img: {
    maxWidth: "100%",
  },
  table: {
    borderCollapse: "collapse",
  },
  "input, textarea": {
    "-webkit-user-select": "auto",
  },
  textarea: {
    whiteSpace: "revert",
  },
  meter: {
    "-webkit-appearance": "revert",
    appearance: "revert",
  },
  "::placeholder": {
    color: "unset",
  },
  ":where([hidden])": {
    display: "none",
  },
  ":where([contenteditable]:not([contenteditable='false']))": {
    "-moz-user-modify": "read-write",
    "-webkit-user-modify": "read-write",
    "overflow-wrap": "break-word",
    "-webkit-line-break": "after-white-space",
    "-webkit-user-select": "auto",
  },
  ":where([draggable='true'])": {
    "-webkit-user-drag": "element",
  },
};
const globalStyles = globalCss({
  ...cssReset,
  body: {
    margin: 0,
    fontFamily: "$body",
    color: "$bodyBg",
    "*, *::before, &::after": {
      borderColor: "$borderColor",
      wordWrap: "break-word",
    },
    lineHeight: "$base",
  },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default App;
