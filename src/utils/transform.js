
import lerp from './lerp'
import clamp from './clamp'
export default function transform(progress, arrayValue, arrayTransform) {
  // console.log("progress", progress)
  // console.log("clamp", lerp(0, 1, clamp(progress, arrayTransform[0], arrayTransform[1]) / arrayTransform[1]))
  // return lerp(arrayValue[0], arrayValue[1], lerp(0, 1, clamp(progress, arrayTransform[0], arrayTransform[1]) / arrayTransform[1]))
  console.log(clamp(lerp(0, 1, progress / arrayTransform[1]), 0, 1));
  return lerp(arrayValue[0], arrayValue[1], lerp(0, 1, progress / arrayTransform[1]))
}

