import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader"
import { useInView } from 'react-intersection-observer';

export default function Image({ alt, width, height, src, lazyload=true }) {
  const [loaded, setLoaded] = useState(!lazyload);
  const { ref, inView, } = useInView({
    /* Optional options */
    threshold: 0,
  });

  // const imgRef = useRef(null);
  // const observerRef = useRef(null);

  // useEffect(() => {
  //   let loader = imgRef.current;
  //   console.log(loader);
  //   observerRef.current = new IntersectionObserver(
  //     (entries) => {
  //       console.log(entries);
  //       if (entries[0].isIntersecting) {
  //         setLoaded(true);
  //         observerRef.current.unobserve(loader);
  //       }

  //       observerRef.current.observe(loader);
  //     }, 
  //     {
  //       rootMargin: "0px 0px -200px 0px",
  //     }
  //   );
  //   return () => {
  //     observerRef.current.unobserve(loader);
  //   }
  // }, []);

  useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [inView]);

  if (loaded)
    return (<img {...{ alt, width, height, src }} />)


  return (
    <div ref={ref}>
      <ContentLoader
        width={width}
        height={height}
      >
        <rect x="0" y="0" rx="0" ry="0" width={width} height={height} /> 
      </ContentLoader>
    </div>
  )
}