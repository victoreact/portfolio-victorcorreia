import { IconButton, SimpleButton, TextButton } from "./styles"

interface ButtonProps {
    imageSrc: string;
    text: string;
}
const HardSkillButton = ({imageSrc, text}: ButtonProps) => {
    return(
        <>
        <SimpleButton>
            <IconButton src={imageSrc} alt="botão hardskill"/>
            <TextButton>{text}</TextButton>
        </SimpleButton>
        </>
    )
}

export default HardSkillButton