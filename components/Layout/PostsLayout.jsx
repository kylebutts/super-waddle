import Content from "../Content"
import Main from "./Main"

export default function PostsLayout( {children, ...props}) {
  return (
    <Main>
      <Content>
        { children }
      </Content>
    </Main>
  )
}
