import { CardContainer, PlaceHolder, TitleAndSubtitleCard } from "./styles"

interface Props {
    imageSrc: string;
    title: string;
    text: string;
  }

const CardComponent = ({ imageSrc, title, text}: Props) => {
    return(
        <>
        <CardContainer>
            <PlaceHolder src={imageSrc}/>
            <TitleAndSubtitleCard>
                <h1>{title}</h1>
                <p>{text}</p>
            </TitleAndSubtitleCard>
        </CardContainer>
        </>
    )
}

export default CardComponent