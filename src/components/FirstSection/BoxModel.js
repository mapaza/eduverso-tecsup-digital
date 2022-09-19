import React, { Suspense, forwardRef } from 'react'
import { Canvas } from './styles'
// import {
//   EffectComposer,
//   Bloom,
// } from "@react-three/postprocessing";
// import { BlendFunction } from 'postprocessing'
// import { Resizer, KernelSize } from 'postprocessing'
import { OrbitControls } from '@react-three/drei'

import ZoomIn from './ZoomIn'
import Model from './Model'
// import { Canvas } from './styles'


function BoxModel({
  enabledZoomIn = true,
  enabledOrbitControls = false,
  pathModel,
  meshProps,
  ...props },
  ref) {
  return (
    <Canvas
      colorManagement
      pixelRatio={window.devicePixelRatio}
      camera={{ fov: 50, position: [0, 0, 50] }}
      gl={{
        powerPreference: "high-performance",
        // alpha: false,
        // antialias: false,
        // stencil: false,
        // depth: false
      }}
      // style={{ width: "50%", height: '100vh' }}
      {...props}
    >
      {/* <color attach="background" args={['transparent']} /> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <ZoomIn enabled={enabledZoomIn} />
        <group /*dispose={null}*/>
          <mesh
            //dispose={null}
            {...meshProps}
            ref={ref}>
            <Model path={pathModel} />
          </mesh>
        </group>


        <OrbitControls autoRotate enabled={enabledOrbitControls} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      </Suspense>
      {/* <EffectComposer>
        <Bloom
          intensity={1.0} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.SMALL} // blur kernel size
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer> */}
    </Canvas>
  )
}


export default forwardRef(BoxModel);
