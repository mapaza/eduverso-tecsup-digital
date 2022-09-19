import React, { useRef } from 'react'

import FirstSection from '../FirstSection'
import SecondSection from '../SecondSection'

import { Container } from './styles'
import ThirdSection from '../ThirdSection'
import FourthSection from '../FourthSection'
// import useWindowSize from '../../hooks/useWindowSize'
import useSmoothScrolling from '../../hooks/useSmoothScrolling'
import { useEffect } from 'react'

function makeNav(color = "white") {
  const navbar = document.querySelector("#navbar");
  const circle = document.querySelector("#navbar .circle");
  const img = document.querySelector("#navbar img");
  const contact = document.querySelector("#navbar .contact");

  if (color === "white") {
    navbar.style.color = "white";
    circle.style.background = "white"
    circle.style.color = "black"
    contact.style.color = "white"
    img.style.filter = "invert(0%)"
  } else {
    navbar.style.color = "black";
    circle.style.background = "rgba(0,0,0,1)"
    circle.style.color = "white"
    contact.style.color = "black"
    img.style.filter = "invert(100%)"
  }
}

const isIntersected = (intersectedView, top = 10) => {
  const y = window.pageYOffset
  const elOffsetTop = intersectedView.current.offsetTop - top;
  const limitEl = intersectedView.current.offsetHeight + elOffsetTop;
  if (elOffsetTop < y && limitEl > y) {
    return true;
  }

  return false
}

export default function SectionsWrapper() {

  const wrapperRef = useRef(null);

  const intersectedView = useRef(null);
  const intersectedView2 = useRef(null);

  useSmoothScrolling(wrapperRef);

  useEffect(() => {



    function onScroll() {

      if (isIntersected(intersectedView)) {
        makeNav("black")
      } else if (isIntersected(intersectedView2)) {
        makeNav("black")
      } else {
        makeNav("white")
      }
      // console.log(elOffsetTop, y);
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  return (
    <div>
      {/* <BackgroundVideo key={videobg} src={videobg} thumb={thumbg} /> */}

      <Container
        ref={wrapperRef}
      >

        <FirstSection />
        <SecondSection ref={intersectedView} />
        <ThirdSection />
        <FourthSection ref={intersectedView2} />

      </Container>

    </div>

  )
}
