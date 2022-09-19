import React from 'react';
import { useProgress } from '@react-three/drei';
import TecsupLogo from '../TecsupLogo'
// import { useLocation } from 'react-router-dom'
import { Container } from './styles';
import { useEffect } from 'react';
// import { LoaderContext } from './LoaderContext'


export default function Loader() {

  // const { isMounted, setIsMounted } = useContext(LoaderContext);
  // const [isLoading, setIsLoading] = useState(true);
  // const [counter, setCounter] = useState(0);
  // const [isIndex, setIsIndex] = useState(false);
  const { progress } = useProgress()


  // const loaded = progress === 100;
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     setIsIndex(true);
  //   } else {
  //     setIsIndex(false);
  //   }
  // }, [location])


  // useEffect(() => {

  //   if (isMounted) return

  //   if (isIndex) {
  //     const isLoaded = !(progress === 100);
  //     setIsLoading(isLoaded);
  //     setIsMounted(!isLoaded);
  //   } else {
  //     // if (!isMounted) {
  //     const timeoutId = setTimeout(() => {
  //       setIsLoading(false);
  //       setIsMounted(true);
  //     }, 1500)
  //     return () => clearTimeout(timeoutId);
  //     // }

  //   }


  // }, [progress, active, setIsMounted, location, isLoading, isIndex, isMounted])

  // useEffect(() => {

  //   if (isIndex || isMounted) return

  //   const timer =
  //     counter < 100 && setInterval(() => setCounter(counter + 10), 1500 / 15);
  //   return () => clearInterval(timer);

  // }, [counter, isIndex, isMounted]);

  const isLoading = !(progress === 100);

  useEffect(() => {
    window.document.body.style.overflowY = !isLoading ? "auto" : "hidden"
  }, [isLoading])


  useEffect(() => {

    console.log("montando componente");
  }, [])



  return (
    <Container
      initial={false}
      animate={{
        opacity: isLoading ? 1 : 0,
        display: isLoading ? 'flex' : "none",
        transition: {
          display: {
            delay: isLoading ? 0 : 1.5
          },
          opacity: {
            duration: isLoading ? 0 : 0.5
          }
        }
      }}
    // exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <TecsupLogo />

      <div className="footer">
        <p className="loading-percent">
          {progress.toFixed(0)}%
        </p>
        <p className="loading-description">
          Cargando la experiencia
        </p>
      </div>

    </Container>
  )
} 
