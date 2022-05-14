import {Img, DivImg, Section, DivText, DivImgP, DivP, ImgP} from '../styles/Inicio.js'



const Inicio = () => {
    return(
        <Section>
            <DivText>
                <h1>
                    Make 
                    <br />
                    <span>remote work</span>
                </h1>
                <p>
                    Get your team in sync, no matter yout location.
                    <br />
                    Streamline proscesses, create team rituals, and 
                    <br />
                    watch productivity soar.
                </p>
                    <br />
                <button>
                    Learn more
                </button>

                <DivP>
                    <DivImgP>
                        <ImgP src="./img/client-databiz.svg" />
                    </DivImgP>
                    <DivImgP>
                        <ImgP src="./img/client-audiophile.svg" />
                    </DivImgP>
                    <DivImgP>
                        <ImgP src="./img/client-meet.svg" />
                    </DivImgP>
                    <DivImgP>
                        <ImgP src="./img/client-maker.svg" />
                    </DivImgP>
                </DivP>

            </DivText>
            <DivImg>
                <Img src="./img/image-hero-desktop.png" />
            </DivImg>
        </Section>

    )
}

export default Inicio;