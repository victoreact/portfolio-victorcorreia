import styled from "styled-components";

export const ContainerButtom = styled.button`
display: flex;
height: 68px;
width: 400px;
border-radius: 8px;
justify-content: space-between;
align-items: center;
text-decoration: none;
padding: 20px;

text-decoration: none;
border: 1.5px solid transparent; 
transition: border 0.3s ease-in-out;
background-color: #292C34;
cursor: pointer;

`;

export const LeftContent = styled.div`
padding: 7px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
img{
    width: 28px;
    flex-shrink: 0;
}

p{
    color: #C0C4CE;
    font-family: 'Maven Pro';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
}
`;

export const ArrowLink = styled.img`

width: 20px;
img{
width: 17px;
flex-shrink: 0;
}
`;  
