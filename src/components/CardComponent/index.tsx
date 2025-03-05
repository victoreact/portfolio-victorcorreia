import { CardContainer, PlaceHolder, TitleAndSubtitleCard } from "./styles"

interface Props {
    imageSrc: string;
    title: string;
    text: string;
    link?: string;
  }

const CardComponent = ({ imageSrc, title, text, link}: Props) => {
    return(
        <>
        <a href={link} target="blank">
        <CardContainer>
            <PlaceHolder src={imageSrc}/>
            <TitleAndSubtitleCard>
                <h1>{title}</h1>
                <p>{text}</p>
            </TitleAndSubtitleCard>
        </CardContainer>
        </a>
        </>
    )
}

export default CardComponent