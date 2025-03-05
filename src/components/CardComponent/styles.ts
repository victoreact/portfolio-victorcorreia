import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
width: 330px;
height: 295px;
padding: 12px;
flex-direction: column;
align-items: left;
gap: 20px;
flex-shrink: 0;
border-radius: 12px;
background-color: #292C34;

cursor: pointer;
`;

export const PlaceHolder = styled.img`
width: 306px;
height: 156px;
flex-shrink: 0;

border-radius: 8px;
background-color: #878EA1;
`;

export const TitleAndSubtitleCard = styled.div`
h1{
    color: #E2E4E9;
    

    font-family: 'Asap', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}

p{
    color: #C0C4CE;

    font-family: 'Maven Pro';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}
`;