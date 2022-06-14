import MenuBar from "../MenuBar"
import Content from "../Content"

const Main = ({ children, ...props }) => (
  <div className="min-h-screen w-full bg-mine-shaft-100 font-jetbrains text-mine-shaft-900 dark:bg-mine-shaft-900 dark:text-mine-shaft-50">
    <div className="pt-size-xs prose:pt-size-lg-xl pb-size-2xl">
      <MenuBar />
      {children}
    </div>
  </div>
)

export default Main
