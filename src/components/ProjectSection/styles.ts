import styled from "styled-components";

export const ContainerProject = styled.div`
height: 800px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 70px;
align-self: stretch;
padding: 72px 120px 144px 120px;
`;

export const TitleProject = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
h3{
    color: #E3646E;
    text-align: center;

    font-family: 'Inconsolata';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

h2{
    color: #E2E4E9;
    text-align: center;

    font-family: 'Asap';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
}
`;
export const ContainerCard = styled.div`

display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

`;
