import React from 'react';

import { Container, InnerContainer, Text, Border } from './styles'


export default function ButtonCircle({ canAnimate, delay = 1.5, black = false, children }) {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{
        opacity: canAnimate ? 1 : 0,
        transition: {
          opacity: {
            ease: "easeOut",
            delay
          },
        }
      }}>
      <Border
        style={{
          borderColor: black ? "rgba(0,0,0,0.5) transparent rgba(0,0,0,0.5) transparent" : "rgba(255,255,255,0.5) transparent rgba(255,255,255,0.5) transparent"
        }}
        animate={{
          rotate: canAnimate ? 360 : 0,
          transition: {
            rotate: {
              duration: 3,
              repeat: Infinity
            }
          }
        }}
        whileHover={{
          scale: 1.1, transition: {
            delay: 0,
          }
        }} />
      <InnerContainer
        style={{
          borderColor: black ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)"
        }}
      >
        <Text style={{
          color: black ? "black" : "white"
        }}>
          {children}
        </Text>
      </InnerContainer>
    </Container>

  )
}
