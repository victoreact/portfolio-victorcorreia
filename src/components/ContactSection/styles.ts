import styled from "styled-components";
import backgroundstyle from '../../assets/Background_Contacts.svg'


export const ContainerContact = styled.div`

height: 700px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
padding: 270px 163px 57px 163px;
margin-bottom: 180px;


background-image: url(${backgroundstyle});
background-size: cover;
background-position: center;
background-repeat: no-repeat;

`;

export const TextContact = styled.div`
h2{
    color: #BB72E9;
    text-align: center;

    font-family: 'Inconsolata';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

h1{
    color: #E2E4E9;
    text-align: center;

    font-family: 'Asap';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}

p{
    color: #C0C4CE;
    text-align: center;

    font-family: 'Maven Pro';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

`;