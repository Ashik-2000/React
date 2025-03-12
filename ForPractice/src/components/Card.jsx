import nerdImage from "../assets/images/illustration.png";
import Button from "./Button";
import { CardContainer, ContentContainer, ButtonContainer } from "./styles/Container.styled";
import { Tag, H1, P, Image } from "./styles/Elements";

export default function Card() {
    return (
        <CardContainer>
            <ContentContainer>
                <Tag color="#4361ee">EXCLUSIVE</Tag>
                <H1>React Styled Components</H1>
                <P>
                    Exculsive React JS Tutorial on style component where you
                    will learn why we need this & how to use it.
                </P>
                <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/rsc" text="GitHub repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    );
}
