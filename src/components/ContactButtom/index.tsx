import { ArrowLink, ContainerButtom, LeftContent } from "./styles"
import arrowup from '../../assets/ArrowUpRight.svg'

interface PropsContact {
    imageSrc: string;
    text: string;
    link?: string;
}
const ContactButtom = ({imageSrc, text, link}: PropsContact) => {
    return(
        <>
        <a href={link} target="blank">
        <ContainerButtom>
            <LeftContent>
                <img src={imageSrc} alt="Botão de rede social" />
                <p>{text}</p>
            </LeftContent>
            <ArrowLink src={arrowup}/>
        </ContainerButtom>
        </a>
        </>
    )
}

export default ContactButtom