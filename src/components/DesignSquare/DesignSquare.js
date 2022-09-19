import React from 'react';
import {Container, Item} from './styles';
import {motion} from 'framer-motion';

const DesignSquare = () => {

    const viewBox = "0 0 600 600";
    const styleGrey = {
        fill: "none", 
        strokeWidth: "20", 
        stroke: "#7B7B7B"
    };
    const styleBlue = {
        fill: "none", 
        strokeWidth: "20", 
        stroke: "#2C8DFF"
    };

    return (
        <Container>
            <Item>
                <motion.svg
                    viewBox={viewBox}
                >
                    <motion.rect width="100%" height="100%" style={styleGrey} />
                </motion.svg>
            </Item>
            <Item>
                <motion.svg
                    viewBox={viewBox}
                >
                    <motion.rect width="100%" height="100%" style={styleBlue} />
                </motion.svg>
            </Item>
            <Item>
                <motion.svg
                    viewBox={viewBox}
                >
                    <motion.rect width="100%" height="100%" style={styleBlue} />
                </motion.svg>
            </Item>
            <Item>
                <motion.svg
                    viewBox={viewBox}
                >
                    <motion.rect width="100%" height="100%" style={styleGrey} />
                </motion.svg>
            </Item>
        </Container>
    )
}

export default DesignSquare;