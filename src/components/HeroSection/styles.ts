import styled from "styled-components";
import Background_Intro from '../../assets/Background_Intro.svg';

export const HeroContainer = styled.div`
height: 513px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 193px;
padding: 270px 163px 57px 163px;
margin-bottom: 180px;


background-image: url(${Background_Intro});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;

export const HeaderContainer = styled.div`
height: 348px;
width: 1040px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;


`;


export const MyName = styled.p`
color: #C0C4CE;
text-align: center;
font-family: 'Inconsolata', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 120%;

span{
    color: #E3646E;
}
`;

export const TitleandSubtitle = styled.div`
width: 680px;
h1{ 
color: #E2E4E9;
text-align: center;

font-family: 'Asap';
font-size: 56px;
font-style: normal;
font-weight: 700;
line-height: 120%;
}


p{
    color: #878EA1;
    text-align: center;

    font-family: 'Maven Pro';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; 
}
`;

export const ArrowButton = styled.button`
gap: 56px;

img{

}
`;
