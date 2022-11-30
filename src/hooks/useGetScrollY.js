import { useEffect, useState } from "react"

export const useGetScrollY = (el) => {
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = (e) => {
    setScrollY(e.target.scrollTop);
  }
  useEffect(() => { 
    el.addEventListener('scroll', handleScroll)
    return () => {
      el.removeEventListener('scroll',handleScroll)
    }
  },[])
  return [scrollY]
}
