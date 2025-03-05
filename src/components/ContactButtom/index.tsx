import { ArrowLink, ContainerButtom, LeftContent } from "./styles"
import arrowup from '../../assets/ArrowUpRight.svg'

interface PropsContact {
    imageSrc: string;
    text: string;
}
const ContactButtom = ({imageSrc, text}: PropsContact) => {
    return(
        <>
        <ContainerButtom>
            <LeftContent>
                <img src={imageSrc} alt="Botão de rede social" />
                <p>{text}</p>
            </LeftContent>
            <ArrowLink src={arrowup}/>
        </ContainerButtom>
        </>
    )
}

export default ContactButtom