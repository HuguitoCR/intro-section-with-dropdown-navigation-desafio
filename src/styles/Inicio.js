import Styled from 'styled-components';



export const Img = Styled.img`
    width: 550px;
    height: 650px;
    object-fit: cover;
    object-position: center;

    @media (max-width: 375px) {

    }
`;


export const ImgP = Styled.img`
    object-fit: cover;
    object-position: center;
`;

export const DivImg = Styled.div`
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
`;

export const DivText = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

h1 {
    font-size: 90px;
    color: var(--Almost-Black);
}

p {
    color: var(--Medium-Gray);
  
    line-height: 1.5rem;
}

button {
    background-color: var(--Almost-Black);
    color: var(--Almost-White);
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    margin-top: 1rem;
    width: 112.18px;
    height: 39px;
}

`;


export const DivP = Styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 8rem;
    align-items: center;
`;

export const DivImgP = Styled.div`
    width: 100%;
`;