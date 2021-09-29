import ContentLoader from "react-content-loader"

export default function AppLoader() {
  return (
    <div className="container">
      <section className="flex">
        <div className="w-1/5 p-2">
          <ContentLoader
            width="240"
            height="630"
          >
            <rect x="0" y="0" rx="0" ry="0" width="240" height="310" /> 
            <rect x="0" y="320" rx="0" ry="0" width="240" height="310" /> 
          </ContentLoader>
        </div>
        <div className="w-4/5 p-2">
            <ContentLoader
              width="1014"
              height="1423"
            >
              <rect x="0" y="0" rx="0" ry="0" width="246" height="471" /> 
              <rect x="256" y="0" rx="0" ry="0" width="246" height="471" /> 
              <rect x="512" y="0" rx="0" ry="0" width="246" height="471" /> 
              <rect x="768" y="0" rx="0" ry="0" width="246" height="471" /> 

              <rect x="0" y="481" rx="0" ry="0" width="246" height="471" /> 
              <rect x="256" y="481" rx="0" ry="0" width="246" height="471" /> 
              <rect x="512" y="481" rx="0" ry="0" width="246" height="471" /> 
              <rect x="768" y="481" rx="0" ry="0" width="246" height="471" /> 
              
              <rect x="0" y="952" rx="0" ry="0" width="246" height="471" /> 
              <rect x="256" y="952" rx="0" ry="0" width="246" height="471" /> 
              <rect x="512" y="952" rx="0" ry="0" width="246" height="471" /> 
              <rect x="768" y="952" rx="0" ry="0" width="246" height="471" /> 
            </ContentLoader>
        </div>
      </section>
    </div>
  )
}