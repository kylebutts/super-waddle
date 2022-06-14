import Div from './Div'
import A from "./A"
import Figure from "./Figure"
import Bg from "./Bg"
import Color from "./Color"
import { H1, H2, H3, H4, Paragraph, Unordered, Ordered, ListItem } from "./Typography"
import { Pre, HighlightCode, Code } from "./../Code"
import LargeBlock from "./../LargeBlock"
import FlexExampleGap from "./Widgets/Shiny-with-Tailwind/FlexExampleGap"
import FlexExampleGrow from "./Widgets/Shiny-with-Tailwind/FlexExampleGrow"
import VectorSubset from "./Widgets/Shiny-with-Tailwind/VectorSubset"

const customComponents = {
  Figure,
  Bg,
  Color,
  LargeBlock,
  HighlightCode
}

const widgets = {
  FlexExampleGap, 
  FlexExampleGrow,
  VectorSubset
}

const MDXComponents = {
  div: Div,
  pre: Pre,
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: Paragraph,
  ul: Unordered,
  ol: Ordered,
  li: ListItem,
  a: A,
  ...customComponents,
  ...widgets,
}

export default MDXComponents
