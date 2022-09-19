import React from 'react';

import {Container, Item, Video} from './styles';

const Video = () => {
    return(
        <Container>
            <Item>
                <Video autoplay controls>
                    <source src="{ruta}.mp4" type="video/mp4" />
                    <source src="{ruta}.webm" type="video/webm" />
                    <source src="{ruta}.ogv" type="video/ogg" />
                </Video>
            </Item>
        </Container>
    )
}


export default Video;