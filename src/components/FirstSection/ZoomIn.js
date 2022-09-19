// import React from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

export default function ZoomIn({ enabled = true }) {
  const vec = new THREE.Vector3(0, 0, 5)
  return useFrame(({ camera }) => {
    if (!enabled) return
    camera.position.lerp(vec, 0.1)
  })
}
