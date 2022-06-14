const Div = ({ children, ...props }) => {
  // Remove rehype wrapper
  if (props["data-rehype-pretty-code-fragment"] != null) {
    return children;
  }
  // Adjust Katex equations
  if(props.className.includes("math-display")) { 
    return <div className = "math math-display text-lg">{children}</div>
  }

  return <div {...props}>{children}</div>
}

export default Div
