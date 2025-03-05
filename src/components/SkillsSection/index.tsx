import { ContainerServices, ContainerSkills, TitleAndSubtitleSkills, ContainerCards, ContainerHardButtons } from "./styles"
import CardComponent from "../CardComponent"
import victorapresent from '../../assets/victorapresent.png'
import victorpalestrante from '../../assets/victorpalestrante.png'
import victorpremio from '../../assets/victorpremio.png'
import HardSkillButton from "../HardSkillButton"
import HTML from '../../assets/HTML.svg'
import CSS from '../../assets/CSS.svg'
import JAVASCRIPT from '../../assets/JavaScript.svg'
import REACT from '../../assets/React.svg'
import GITHUB from '../../assets/GitHub.svg'



const SkillsSection = () => {
    return(
        <>
       <ContainerSkills>
            <ContainerServices>
            <TitleAndSubtitleSkills>
                <h1>Soft Skill & Hard Skill</h1>
                <h2>Como posso ajudar o seu negócio</h2>
            </TitleAndSubtitleSkills>
            </ContainerServices>
            <ContainerHardButtons>
                <HardSkillButton imageSrc={HTML} text="HTML"/>
                <HardSkillButton imageSrc={CSS} text="CSS"/>
                <HardSkillButton imageSrc={JAVASCRIPT} text="JAVASCRIPT"/>
                <HardSkillButton imageSrc={REACT} text="REACT" />
                <HardSkillButton imageSrc={GITHUB} text="GITHUB" /> 

            </ContainerHardButtons>
            <ContainerCards>
            <CardComponent title="Visão de projeto" text="Um dos maiores desafios é encantar o cliente com sua solução, indo além do conhecimento técnico para a compreensão humana" imageSrc={victorapresent}/>
            <CardComponent title="Comunicação" text="Sou uma pessoa que não deixa a oportunidade passar, gosto de falar e ter meu espaço de opinião." imageSrc={victorpalestrante}/>
            <CardComponent title="Trabalho em equipe" text="Gosto muito de campeonatos de tecnologia, sou atualmente bicampeão de hackatons e buscando mais." imageSrc={victorpremio}/>
            </ContainerCards>
       </ContainerSkills>
        </>
    )
}

export default SkillsSection