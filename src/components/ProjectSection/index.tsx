import { ContainerProject, TitleProject, ContainerCard } from "./styles"
import CardComponent from "../CardComponent"

const ProjectSection = () => {
    return(
        <>
        <ContainerProject>
            <TitleProject>
                <h3>Meu trabalho</h3>
                <h2>Veja os projetos em destaque</h2>
                <ContainerCard>
                <CardComponent imageSrc="#" title="teste" text="teste"/>
                <CardComponent imageSrc="#" title="teste" text="teste"/>
                <CardComponent imageSrc="#" title="teste" text="teste"/>
                <CardComponent imageSrc="#" title="teste" text="teste"/>
                <CardComponent imageSrc="#" title="teste" text="teste"/>
                <CardComponent imageSrc="#" title="teste" text="teste"/>
                </ContainerCard>
            </TitleProject>
        </ContainerProject>
        </>
    )
}

export default ProjectSection