import {Img, DivImg, Section, DivText, DivImgP, DivP, ImgP} from '../styles/Inicio.js'



const Inicio = () => {
    return(
        <Section>
            <DivText>
                <h1>
                    Make remote work
                </h1>
                <p>
                    Get your team in sync, no matter your location.
                    
                    Streamline proscesses, create team rituals, and 
                    
                    watch productivity soar.
                </p>
                    <br />
                <button>Learn more</button>

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
                <source srcSet="./img/image-hero-desktop.png"  media='(min-width: 376px)' />
                <Img src="./img/image-hero-mobile.png" alt='principal' />
            </DivImg>
        </Section>

    )
}

export default Inicio;