import React from 'react';
import {Container, Item} from './styles';

import {motion} from 'framer-motion';

const DesignX = () => {

    const pathX="M342.622,330.438L183.814,172.494L341.79,13.646c3.117-3.133,3.105-8.199-0.028-11.316 c-3.133-3.117-8.199-3.105-11.316,0.028l0,0L172.502,161.182L13.67,3.206C10.537,0.089,5.471,0.101,2.354,3.234 s-3.105,8.199,0.028,11.316l0,0L161.19,172.494L3.23,331.326c-3.117,3.133-3.105,8.199,0.028,11.316 c3.133,3.117,8.199,3.105,11.316-0.028l157.928-158.808l158.8,157.976c3.133,3.117,8.199,3.105,11.316-0.028 c3.117-3.133,3.105-8.199-0.028-11.316l0,0L342.622,330.438z";

    return(
        <Container>
            <Item>
                <motion.svg
                    viewBox="0 15 350 350"
                >
                    <motion.path
                        d={pathX}
                    />
                </motion.svg>
            </Item>
            <Item>
                <motion.svg
                    viewBox="0 0 350 350"
                >
                    <motion.path
                        d={pathX}
                    />
                </motion.svg>
            </Item>
            <br/><br/>
            <Item>
                <motion.svg
                    viewBox="0 0 350 350"
                >
                    <motion.path
                        d={pathX}
                    />
                </motion.svg>
            </Item>
        </Container>
    );
};

export default DesignX;