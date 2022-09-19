
import { useCallback } from 'react';
import { useRef, useEffect } from 'react'
import useWindowSize from './useWindowSize'
import { useHistory } from 'react-router-dom'




const useSmoothScrolling = (ref) => {
  let smoothScrollingConfig = {
    offset: 0,
    speed: 1
  }

  const size = useWindowSize();

  const history = useHistory();

  const requestRef = useRef();

  useEffect(() => history.listen(() => {
    // console.log(smoothScrollingConfig);
    // if (size.width < 992) return
    window.scrollTo(0, 0);
  }), [history]);


  // useEffect(() => {

  //   return () => {
  //     window.scrollTo(0, 0);
  //   }

  // }, []);

  const smoothScrolling = useCallback(() => {
    // console.log(window.scrollY);
    smoothScrollingConfig.offset += (window.scrollY - smoothScrollingConfig.offset) * 0.04;
    const rounded = Math.round(smoothScrollingConfig.offset * 100) / 100;

    ref.current.style.transform = `translate3D(0, -${rounded}px, 0)`;

    requestRef.current = requestAnimationFrame(smoothScrolling);
  }, [ref, smoothScrollingConfig.offset]);

  const setBodyHeight = useCallback(() => {
    document.body.style.height = `${ref.current.getBoundingClientRect().height
      }px`;
  }, [ref]);


  useEffect(() => {
    if (size.width < 992) return
    requestRef.current = requestAnimationFrame(smoothScrolling);
    return () => cancelAnimationFrame(requestRef.current)


  }, [smoothScrolling, size.width]);

  useEffect(() => {
    if (size.width < 992) return
    setBodyHeight();
  }, [size.height, setBodyHeight, size.width]);




}

export default useSmoothScrolling;
