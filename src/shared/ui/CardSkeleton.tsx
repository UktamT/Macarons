import { type IContentLoaderProps } from "react-content-loader"
import ContentLoader from "react-content-loader"


const MyLoader = (props: IContentLoaderProps) => (
  <ContentLoader 
    speed={2}
    width={370}
    height={467}
    viewBox="0 0 370 467"
    backgroundColor="#d9d9d9"
    foregroundColor="#b5b5b5"
    {...props}
  >
    <rect x="0" y="0" rx="9" ry="9" width="370" height="306" /> 
    <rect x="0" y="329" rx="8" ry="8" width="370" height="129" />
  </ContentLoader>
)

export default MyLoader