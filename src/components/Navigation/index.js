import React from 'react';
import {Container} from './styles';

import CircleNavigationButton from '../CircleNavigationButton';

const Navigation = () => {
    return(
        <Container>
            <CircleNavigationButton/>
            <CircleNavigationButton/>
            <CircleNavigationButton/>
        </Container>
    );
};

export default Navigation;