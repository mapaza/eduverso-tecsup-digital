import React from 'react';

import { Container, InnerContainer, Text } from './styles'

export default function ButtonCircle() {
  return (
    <Container
      whileHover={{
        scale: 1.1, transition: {
          delay: 0,
          // ease: "linear",
        }
      }}>
      <InnerContainer>
        <Text>
          VER LOS SERVICIOS
        </Text>
      </InnerContainer>
    </Container>
  )
}
