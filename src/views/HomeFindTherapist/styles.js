import styled from 'styled-components';
import bannerPrincipal from '../../assets/img/banner_principal.svg';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    outline: 0;
    overflow-x: hidden;
    
    



   

`;


export const Principal = styled.div`
    display: flex;
    flex-direction: column;



    width: 100%;
    height: 85%;

    

    background: url(${bannerPrincipal}) no-repeat center;
    background-image: cover;




`;

export const AmoterapiaHeader = styled.div`
    display: flex;
    align-items: center;
    padding-top: 37px;


`;

export const LogoAmoterapia = styled.img`

    width: 227.11px;
    height: 40.37px;

    padding-left: 15%;
    


`;

export const MenuList = styled.ul`

    padding-left: 15%;
    display: flex;
    height: 16px;
    align-items: center;
    justify-content: center;

    li {
        list-style: none;


        a {
            text-decoration: none;
            color: #F2E232;
            font-family: 'Roboto';
            font-size: 16px;

           
        }

        & + li {
            padding-left: 33.5px;
        }
    }

`;

export const MenuSocialList = styled.ul`

    padding-left: 90px;
    display: flex;
    height: 16px;
    align-items: center;
    justify-content: center;

    li {
        list-style: none;


        

        & + li {
            padding-left: 30px;
        }
    }

`;

export const Content = styled.div`

    padding-top: 190px;
    padding-left: 15%;
    
    p {
        padding: 0;
        margin: 0;
        font-family: 'Nunito';
        font-size: 50px;
        font-weight: bold;
        color: #fff;
    }

    div {
        
        width: 270px;
        height: 56px;
        border: 1px solid #D1CB2B;
        border-radius: 8px;
        margin-top: 58px;
        background: #D1CB2B;
        align-items: center;
        justify-content: center;


        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            p {
                color: #fff;
                font-family: 'Roboto';
                font-size: 16px;
                font-weight: 500;

            }

            img {
                padding-left: 18px;
                width: 13.83px;
                height: 13.48px;
            }

        }
    }

    

`;

export const PreLoadingContainer = styled.div`

    
    
    z-index: 1;
    width: 100%;
    height: 300px;
    top: 78%;
    position: fixed;
    justify-content: center;
    align-items: center;
    display: flex;
    left: -2.5%;




    div {
        background: #fff;
        
        width: 65%;
        height: 100%;
        border-radius: 8px;
    
    }





`;