import React from 'react'
import { useGLTFLoader } from '@react-three/drei'

export default function Model({ path }) {
  const gltf = useGLTFLoader(path, true)
  return <primitive object={gltf.scene}  />
}
