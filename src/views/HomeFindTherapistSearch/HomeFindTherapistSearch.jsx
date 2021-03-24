import React from 'react';

import logoAmoterapia from '../../assets/img/logo_amoterapia.svg';
import facebookIcon from '../../assets/img/icon_facebook.svg';
import instagramIcon from '../../assets/img/icon_instagram.svg';
import userIcon from '../../assets/img/user_icon.svg';
import searchIcon from '../../assets/img/icon_search.svg';
import iconTypeOfSearch from '../../assets/img/icon_typeOfSearch.svg';
import iconReasonToTalk from '../../assets/img/icon_reasonToTalk.svg';
import iconSpeciality from '../../assets/img/icon_Speciality.svg';
import iconDate from '../../assets/img/icon_Date.svg';

import banner2 from '../../assets/img/banner2.svg';

import FilterInput from '../../components/FilterComponent';

import {Container, Banner, TherapistsList, TherapistFilterHeader, Principal, FilterContainer, AmoterapiaHeader, TherapistFilterContainer, LogoAmoterapia,SearchInput, MenuList, MenuSocialList, Content, SearchContainer, PreLoadingContainer} from './styles';
import Therapist from '../../components/Therapist';

const HomeFindTherapist = () => {

    return (

        <Container>

            <Banner src={banner2} alt=""/>

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
                    <p>Encontrar o meu terapeuta</p>
                    <SearchContainer>
                        <p>Agende um bate-papo com especialistas</p>
                        <SearchInput>
                            <input type="text" placeholder="Digite o nome do terapeuta sexual" />
                            <img src={searchIcon} alt="Icone de pesquisa"/>
                        </SearchInput>
                    </SearchContainer>

                </Content>

                <PreLoadingContainer>

                    <FilterContainer>

                        <TherapistFilterContainer>

                            <TherapistFilterHeader>

                                <FilterInput img={iconTypeOfSearch} prev="Todos os especialistas" text="TIPO DE ESPECIALISTA"/>

                                <FilterInput img={iconReasonToTalk} prev="Todos os motivos" text="MOTIVO DO ATENDIMENTO"/>

                                <FilterInput img={iconSpeciality} prev="Todos os gêneros" text="ESPECIALIDADE POR GENERO "/>

                                <FilterInput img={iconDate} prev="Todos as datas disponíveis" text="DATA DISPONÍVEL"/>


                            </TherapistFilterHeader>

                            
                        </TherapistFilterContainer>

                        <TherapistsList>

                            <Therapist/>

                        </TherapistsList>

                    </FilterContainer>

                    

                </PreLoadingContainer>
                
                

            </Principal>

                
            
        </Container>
        
    )



}

export default HomeFindTherapist;