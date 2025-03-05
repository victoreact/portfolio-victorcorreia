import ContactButtom from "../ContactButtom"
import { ContainerContact, TextContact } from "./styles"
import linkedln from '../../assets/LinkedinLogo.svg'
import instagram from '../../assets/InstagramLogo.svg'
import github from '../../assets/GitHub.svg'


const ContactSection = () => {
    return(
        <>
        <ContainerContact>
            <TextContact>
                <h2>Contato</h2>
                <h1>Gostou do meu trabalho?</h1>
                <p>Entre em contato ou acompanhe minhas redes sociais!</p>
            </TextContact>
            <ContactButtom imageSrc={linkedln} text="linkedln" link="https://www.linkedin.com/in/victor-correia-luiz/"/>
            <ContactButtom imageSrc={instagram} text="instagram" />
            <ContactButtom imageSrc={github} text="github" link="https://github.com/victoreact" />
        </ContainerContact>
        </>
    )
}

export default ContactSection