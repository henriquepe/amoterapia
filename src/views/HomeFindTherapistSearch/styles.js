import styled from 'styled-components';
import banner2 from '../../assets/img/banner2.svg';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    outline: 0;
    overflow-x: hidden;


`;

export const Banner = styled.img`

    width: 100%;


    position: absolute;
    z-index: 0;


`;

export const AmoterapiaHeader = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;


`;


export const Principal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    padding-top: 37px;

    

    /* background: url(${banner2}) no-repeat center;
    background-image: cover; */
    




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


    padding-top: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;

    z-index: 1;

    
    p {
        padding: 0;
        margin: 0;
        font-family: 'Nunito';
        font-size: 50px;
        font-weight: bold;
        color: #fff;
    }

    
   

`;

export const SearchContainer = styled.div`

    

    z-index: 1;
    width: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        font-family: 'Nunito';
        font-size: 25px;
        font-weight: normal;
    }

`;

export const SearchInput = styled.div`

    z-index: 1;
    border: 1px solid #fff;
    background: #fff;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between;

    margin-top: 42px;
    width: 450px !important;
    height: 40px;
    border-radius: 20px;

    input {
        border: 0;
        outline: 0;

        flex: 1;
        padding-left: 42px;
        padding-right: 40px;
        
        &::placeholder {
            color: #5C1BA6;
            font-family: 'Roboto';
            font-size: 14px;
        }

    }

    img {
        padding-right: 20px;

    }
    


`;

export const PreLoadingContainer = styled.div`

    
    
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 65%;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;





    

`;

export const FilterContainer = styled.div`

    background: #fff;

    width: 90%;
    max-width: 80%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;


export const TherapistFilterContainer = styled.div`


    height: fit-content;

   
    display: flex;

    


`;

export const TherapistFilterHeader = styled.ul`


    display: grid;



    justify-content: center;

    

    padding: 0;

    grid-template-columns: 25% 25% 25% 25%; 


    grid-gap: 30px;

    

    li {
        list-style: none;
    }

    


`;


export const TherapistsList = styled.ul`

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;

    

    padding: 0;





    





`;
