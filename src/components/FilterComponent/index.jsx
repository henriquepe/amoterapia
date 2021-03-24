import React from 'react';



import { Container, ImageAndText } from './styles';

import Input from '../Input';

const FilterInput = (props) => {

    return  (
        <Container>
            <ImageAndText>
                <img src={props.img} alt="icone"/>
                <p>{props.text}</p>
            </ImageAndText>
            <Input prev={props.prev}/>
            
        </Container>
    )

}
export default FilterInput;