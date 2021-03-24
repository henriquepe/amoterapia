import React from 'react';

import { Container, TherapistContainer, TherapistResume, TherapistBio } from './styles';


const Therapist = () => {



    return (
        <Container>
            <TherapistContainer>
                <TherapistResume>                    
                    <div>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHFH0JMBEohJg/profile-displayphoto-shrink_800_800/0/1615171816427?e=1621468800&v=beta&t=3E_95qf6bkWL_TNS8dX3RCIF9T1fJTrG0UNV6DFMOhc" alt="Foto"/>
                        <div>
                            <strong>Henrique Pires</strong>
                            <p>Terapeuta</p>
                        </div>
                    </div>
                    <div>
                        <a href="#">Conheça o Henrique</a>
                        <img src="yuoutubeicon" alt=""/>
                    </div>
                    <div>
                        <img src="moneyicon" alt=""/>
                        <p>R$ 120,00</p>
                    </div>

                </TherapistResume>

                <TherapistBio>
                    <strong>sdadodajsdiosa</strong>
                    <p>
                        kadsjsaodjsaojsaijdoajosdiaojdaoaoaidjaioasdsajaslad
                        asdksaldjlajdsklajdaljlasjdalkjdlkssjdlkjaljdlajsjaklasjd
                        ajdadladlahdsjashdasjkdhkashdkjahdajskdsajkhdajshdjahdsja
                        ajdhakjshdkajshdkahasjkhsahdlfheilafhiacndsnueakfhualncc
                        asdjawljdaiwdjaljdlijsdjla.
                    </p>
                </TherapistBio>

            </TherapistContainer>
        </Container>
        
    )
}

export default Therapist