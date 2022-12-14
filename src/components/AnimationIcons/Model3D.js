import React from 'react';
import {Container, Item, Circulo} from './styles';
import {motion} from 'framer-motion';

const Model3D = () =>{

    const icon = {
        hidden: {
            // opacity: 0,
            pathLength: 0,
            fill: "none",
        },
        visible: {
            // opacity: 1,  
            pathLength: 1,     
            fill: "none",
        }
    };
    const initial = "hidden";
    const animate = "visible";
    const transition = {
        duration: 2,
        ease: "easeInOut",
    }

    return (
        <Container>
            <Item>
                <Circulo/>
                <motion.svg
                    viewBox="-12.5 -12.5 50 50"
                >
                    <motion.path
                        d="m12 12c-.059 0-.117-.01-.173-.031l-9.5-3.5c-.197-.072-.327-.26-.327-.469s.131-.397.328-.469l6.5-2.39c.258-.094.547.038.642.297s-.038.546-.297.642l-5.225 1.92 8.052 2.967 8.052-2.967-5.225-1.921c-.259-.095-.392-.383-.297-.642s.383-.391.642-.297l6.5 2.39c.197.073.328.261.328.47s-.13.397-.327.469l-9.5 3.5c-.056.021-.114.031-.173.031z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m12 24c-.059 0-.117-.01-.172-.031l-5.31-1.95c-.259-.095-.392-.382-.297-.642.095-.259.383-.392.642-.297l5.137 1.887 5.138-1.887c.259-.096.546.038.642.297.095.259-.038.546-.297.642l-5.31 1.95c-.056.021-.114.031-.173.031z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m2.5 17.76c-.276 0-.5-.224-.5-.5v-9.26c0-.276.224-.5.5-.5s.5.224.5.5v9.26c0 .276-.224.5-.5.5z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m21.5 17.76c-.276 0-.5-.224-.5-.5v-9.26c0-.276.224-.5.5-.5s.5.224.5.5v9.26c0 .276-.224.5-.5.5z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m12 8c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5s.5.224.5.5v4c0 .276-.224.5-.5.5z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m20.94 21.44c-.128 0-.256-.049-.354-.146l-2.44-2.44c-.195-.195-.195-.512 0-.707s.512-.195.707 0l2.44 2.44c.195.195.195.512 0 .707-.097.097-.225.146-.353.146z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m3.06 21.44c-.128 0-.256-.049-.354-.146-.195-.195-.195-.512 0-.707l2.44-2.44c.195-.195.512-.195.707 0s.195.512 0 .707l-2.44 2.44c-.097.097-.225.146-.353.146z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m12 24c-.276 0-.5-.224-.5-.5v-12c0-.276.224-.5.5-.5s.5.224.5.5v12c0 .276-.224.5-.5.5z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m12 4c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m22 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                    <motion.path 
                        d="m2 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
                        variants={icon}
                        initial={initial}
                        animate={animate}
                        transition={transition}
                    />
                </motion.svg>
            </Item>
        </Container>
    );
};

export default Model3D;