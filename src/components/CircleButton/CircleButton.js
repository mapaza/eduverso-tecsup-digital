import React from 'react';
import {Container, Item, Circulo} from './styles';

import {motion} from 'framer-motion';

function CircleButton () {

    const icon = {
        hidden: {
            opacity: 0,
            fill: "none"
        },
        visible: {
            opacity: 1,        
            fill: "none",
        }
    }

    const HanddleClick = () => {
        return console.log("hiciste clic en el botón")
    }

    return (
        <Container>
            <Item onClick={HanddleClick}>
                <Circulo>Soluciones</Circulo>
                <motion.svg
                    viewBox="-10 -10 550 650"
                >
                    <motion.path
                        d="M256,497C123.112,497,15,388.888,15,256S123.112,15,256,15
                        s241,108.112,241,241S388.888,497,256,497z"
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 2,
                            flip: Infinity,
                            ease: "easeInOut",
                        }}
                    />    
                    <motion.path
                        d="M437.02,74.981C388.668,26.629,324.38,0,256,0S123.332,26.629,74.98,74.981C26.628,123.333,0,187.62,0,256
                        s26.629,132.667,74.98,181.019C123.331,485.371,187.62,512,256,512s132.668-26.629,181.02-74.981
                        C485.372,388.667,512,324.38,512,256S485.371,123.333,437.02,74.981z "
                        variants={icon}
                        initial="visible"
                        animate="hidden"
                        transition={{
                            duration: 2,
                            flip: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.svg>
            </Item>
        </Container>
    );
};

export default CircleButton;