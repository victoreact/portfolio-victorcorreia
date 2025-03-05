import {  ArrowButton, HeaderContainer, HeroContainer, MyName, TitleandSubtitle } from "./styles"
import Avatar from '../../assets/Avatar.png'
import CaretDoubleDown from '../../assets/CaretDoubleDown.svg'



const HeroSection = () => {
    return(
        <>
        <HeroContainer> 
            <HeaderContainer>
            <img src={Avatar} alt="meu icone" />
                <MyName>Hello World! Meu nome é <span>Victor Correia</span> e sou</MyName>
                <TitleandSubtitle>
                    <h1>Desenvolvedor FullStack</h1>
                    <p>Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
                </TitleandSubtitle>
            </HeaderContainer>
            <ArrowButton><img src={CaretDoubleDown} alt="seta" /></ArrowButton>
            
        </HeroContainer>
        </>
    )
}

export default HeroSection