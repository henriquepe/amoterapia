import React from 'react';

import logoAmoterapia from '../../assets/img/logo_amoterapia.svg';
import facebookIcon from '../../assets/img/icon_facebook.svg';
import instagramIcon from '../../assets/img/icon_instagram.svg';
import userIcon from '../../assets/img/user_icon.svg';
import arrowRightIcon from '../../assets/img/icon_arrowRight.svg';

import {Container, Principal, AmoterapiaHeader, LogoAmoterapia, MenuList, MenuSocialList, Content, PreLoadingContainer} from './styles';

const HomeFindTherapist = () => {

    return (

        <Container>
            <Principal>
                <AmoterapiaHeader>
                    <LogoAmoterapia src={logoAmoterapia} alt="Amoterapia"/>


                    <MenuList>
                        <li>
                            <a href="Home">Home</a>
                        </li>

                        <li>
                            <a href="Manifesto">Manifesto</a>
                        </li>

                        <li>
                            <a href="Artigos">Artigos</a>
                        </li>

                        <li>
                            <a href="Embaixadores">Embaixadores</a>
                        </li>

                        <li>
                            <a href="Contato">Contato</a>
                        </li>

                    </MenuList>

                    <MenuSocialList>

                    <li>
                        <a href="Facebook">
                            <img src={facebookIcon} alt="Facebook"/>
                        </a>
                    </li>

                    <li>
                        <a href="Instagram">
                            <img src={instagramIcon} alt="Instagram"/>
                        </a>
                    </li>

                    <li>
                        <a href="User">
                            <img src={userIcon} alt="User"/>
                        </a>
                    </li>

                </MenuSocialList>

                </AmoterapiaHeader>


                <Content>
                    <p>Tenha uma vida sexual livre e ativa</p>
                    <p>Começe sua terapia online agora!</p>

                    <div>
                        <a href="EncontrarTerapeuta">
                            <p>Encontrar Terapeuta Sexual</p> 
                            <img src={arrowRightIcon} alt="Seta para a direita"/> 
                        </a>
                        

                    </div>

                </Content>

                <PreLoadingContainer>
                    <div>
                        
                    </div>

                </PreLoadingContainer>






                
                

            </Principal>
            
        </Container>
        
    )



}

export default HomeFindTherapist;