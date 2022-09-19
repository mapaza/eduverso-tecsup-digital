import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container, MenuLayer, VisionLayer } from './styles'

export default function Menu({ open, onClick }) {


  return (
    <Container animate={{
      right: open ? "0%" : "-100%",
      display: open ? 'flex' : "none",
      transition: {
        right: {
          // ease: "easing",
          type: "spring",
          duration: 1.5
        },
        display: {
          delay: open ? 0 : 1
        }
      }
    }}>
      <MenuLayer>
        <Link to="/" style={{ appearance: "none" }} onClick={onClick}>
          <motion.div className="item" whileHover={{ skewX: 10 }}>
            Inicio
          </motion.div>
        </Link>
        <Link to="/servicios" style={{ appearance: "none" }} onClick={onClick}>
          <motion.div className="item" whileHover={{ skewX: 10 }}>
            Servicios
          </motion.div>
        </Link>
        <Link to="/casos" style={{ appearance: "none" }} onClick={onClick}>
          <motion.div className="item" whileHover={{ skewX: 10 }}>
            Casos
          </motion.div>
        </Link>
      </MenuLayer>
      <VisionLayer>
        <p className="title">
          Nuestra misión
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa ipsum molestias laudantium dignissimos nobis asperiores assumenda sapiente, ducimus suscipit dolores omnis earum nemo temporibus? Sunt harum animi ab deserunt?
        </p>
      </VisionLayer>
    </Container>
  )
}
