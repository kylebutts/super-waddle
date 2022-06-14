export default {
  'code[class*="language-"], pre[class*="language-"]': {
    color: "#575279",
    background: "#faf4ed",
    fontFamily:
      '"Cartograph CF", ui-monospace, SFMono-Regular, Menlo, Monaco, \t\tConsolas, "Liberation Mono", "Courier New", monospace',
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: 1.5,
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: 4,
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    "@media print": { textShadow: "none" },
  },
  'code[class*="language-"]::-moz-selection, pre[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection, pre[class*="language-"] ::-moz-selection':
    {
      background: "#eee9e6",
    },
  'code[class*="language-"]::selection, pre[class*="language-"]::selection, code[class*="language-"] ::selection, pre[class*="language-"] ::selection':
    {
      background: "#eee9e6",
    },
  ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
    color: "#575279",
    background: "#faf4ed",
  },
  'pre[class*="language-"]': {
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: "0.1em",
    borderRadius: "0.3em",
    whiteSpace: "normal",
    color: "#575279",
    background: "#faf4ed",
  },
  ".token.entity": { cursor: "help" },
  ".token.important, .token.bold": { fontWeight: "bold" },
  ".token.italic, .token.selector, .token.doctype, .token.attr-name, .token.inserted, .token.deleted, .token.comment, .token.prolog, .token.cdata, .token.constant, .token.parameter, .token.url":
    {
      fontStyle: "italic",
    },
  ".token.url": { textDecoration: "underline" },
  ".namespace": { opacity: 0.7 },
  ".token.constant": { color: "#575279" },
  ".token.comment, .token.prolog, .token.cdata, .token.punctuation": {
    color: "#9893a5",
  },
  ".token.delimiter, .token.important, .token.atrule, .token.operator, .token.keyword":
    {
      color: "#286983",
    },
  ".token.tag, .token.tag .punctuation, .token.doctype, .token.variable, .token.regex, .token.class-name, .token.selector, .token.inserted":
    {
      color: "#56949f",
    },
  ".token.boolean, .token.entity, .token.number, .token.symbol, .token.function":
    {
      color: "#d7827e",
    },
  ".token.string, .token.char, .token.property, .token.attr-value, .token.attr-value .punctuation":
    {
      color: "#ea9d34",
    },
  ".token.parameter, .token.url, .token.name, .token.attr-name, .token.builtin":
    {
      color: "#907aa9",
    },
  ".token.deleted": { color: "#b4637a", background: "rgba(180 99 122 0.12)" },
  ".token.inserted": { background: "rgba(86 148 159 0.12)" },
  "pre[data-line]": { position: "relative" },
  'pre[class*="language-"] > code[class*="language-"]': {
    position: "relative",
    zIndex: 1,
  },
  ".line-highlight, .highlight-lines .highlighted": {
    position: "absolute",
    left: "0",
    right: "0",
    padding: "inherit 0",
    marginTop: "1em",
    background: "#eee9e6",
    boxShadow: "inset 5px 0 0 #575279",
    zIndex: 0,
    pointerEvents: "none",
    lineHeight: "inherit",
    whiteSpace: "pre",
  },
};
