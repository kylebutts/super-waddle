const Code = ({children, className, xl = false, ...props}) => {
  return (<code className={`${xl ? "text-xl" : ""} rounded-[5px] bg-[#fffaf3] py-[3px] px-[5px] text-[#b4637a] dark:bg-[#2a273f] dark:text-[#c4a7e7] ${className}`} {...props}>{children}</code>)
}

export default Code;
export { Code };
