import ContentLoader from "react-content-loader"
import type { IContentLoaderProps } from "react-content-loader"

const NewsSkeleton = (props: IContentLoaderProps ) => (
  <ContentLoader 
    speed={2}
    width={370}
    height={467}
    viewBox="0 0 370 467"
    backgroundColor="#d9d9d9"
    foregroundColor="#b5b5b5"
    {...props}
  >
    <rect x="0" y="0" rx="9" ry="9" width="370" height="366" />
  </ContentLoader>
)

export default NewsSkeleton