import Styled from 'styled-components';


export const Nav = Styled.nav`
    padding: 20px 35px 20px 35px; 
    display: flex;
    align-items: center;
    color: hsl(0, 0%, 41%);
    
    .button{
        display: none;
    }



    @media (max-width: 375px) {
        padding: 20px 0 0 20px;
        justify-content: space-between;

        .button {
            display: block;
            border: none;
            background-color: transparent;
            margin-right: 10px;

        }
    }

    




`;

export const Logo = Styled.img`
    width: 84px;
    height: 27px;
    object-fit: cover;
    object-position: center;
`;



export const Ul = Styled.ul`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 10px;

    @media (max-width: 375px) {
        display: none;
    }

`;

export const Li = Styled.li`
    margin-right: 30px;

`;

export const DivButton = Styled.div`
    margin-left: auto;
    text-align: center;
    

    button {
        color: hsl(0, 0%, 41%);
        border: solid 2px hsl(0, 0%, 41%);
        background: none;
        border-radius: 12px;
        padding: 10px 20px 10px 20px;
        font-size: 14px;
    }

    button:first-child {
        color: hsl(0, 0%, 41%);
        border: none;
        background: none;
        border-radius: 15px;
        padding: 5px 20px 5px 20px;
        margin-right: 20px;
    }

    @media (max-width: 375px) {
        display: none;
    }

`;