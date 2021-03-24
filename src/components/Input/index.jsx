import React from 'react';

import iconArrowDown from '../../assets/img/icon_arrowDown.svg'

import { Container} from './styles';


const Input = (props) => {




    return (
        <Container>
            <input type="text" placeholder={props.prev}/>
            <img src={iconArrowDown} alt="Seta para baixo"/>
        </Container>
    )
}

export default Input;