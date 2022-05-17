import Styled from 'styled-components';



export const Img = Styled.img`
    width: 550px;
    object-fit: cover;
    object-position: center;

    @media (max-width: 375px) {
        width: 375px;
    }
`;


export const ImgP = Styled.img`
    object-fit: cover;
    object-position: center;
`;

export const DivImg = Styled.picture`
    display: flex;
    justify-content: right;
    align-items: center;

`;


export const Section = Styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;

    @media (max-width: 375px) {
            
        flex-direction: column-reverse;
        justify-content: center;
        padding-top: 20px;
    }

`;

export const DivText = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

h1 {
    font-size: 90px;
    color: var(--Almost-Black);
    width: 610px;
}

p {
    color: var(--Medium-Gray);
    line-height: 1.5rem;
    width: 450px;
}

button {
    background-color: var(--Almost-Black);
    border: none;
    color: var(--Almost-White);
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    margin-top: 1rem;
    width: 113.18px;
    height: 39px;
    font-weight: bold;
}

    @media (max-width: 375px) {
        align-items: center;

        h1 {
            font-size: 35px;
            width: auto;
            margin-top: 4rem;
            margin-bottom: 0;
        }

        p {
            width: 350px;
            text-align: center;
            font-size: 16px;
        }

        button {
            font-size: 16px;
            width: auto;
            height: auto;
            padding: 15px 20px 15px 20px;
            border-radius: 15px;
            margin-bottom: 1rem;
        }

    }

`;


export const DivP = Styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8rem;
    align-items: center;

    @media (max-width: 375px) {
        margin-top: 1.5rem;
        margin-bottom: 2rem;
    }
`;

export const DivImgP = Styled.div`
    width: 100%;

    @media (max-width: 375px) {
        transform: scale(0.8); 
        margin: 0;
    }

`;