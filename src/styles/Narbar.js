import Styled from 'styled-components';


export const Nav = Styled.nav`
    padding: 0px 35px 20px 35px; 
    margin-top: 30px;
    display: flex;
    align-items: center;
    color: hsl(0, 0%, 41%);
    height: 60px;
    
    .button{
        display: none;
    }

    @media (max-width: 375px) {
        padding: 0px 0 0 20px;
        margin-top: 10px;
        justify-content: space-between;
        
        .button {
            z-index: 100;
            display: block;
            border: none;
            background-color: transparent;
            margin-right: 10px;
            position: relative;

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
    //margin-bottom: 20px;
    margin-left: 10px;

    @media (max-width: 375px) {
        display: block;
        margin: 0;
        margin-top: 100px;
        width: 100%;
        
        li {
            display: block;
            line-height: 2rem;
        }

        
    }

`;

export const Li = Styled.li`
    margin-right: 30px;
    cursor: pointer;

    &:hover {
        color: var(--Almost-Black);
    }

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
        font-weight: bold;
        cursor: pointer;

        &:hover {
            color: var(--Almost-Black);
        }
    }

    button:first-child {
        color: hsl(0, 0%, 41%);
        border: none;
        background: none;
        border-radius: 15px;
        padding: 5px 20px 5px 20px;
        margin-right: 20px;

        &:hover {
            color: var(--Almost-Black);
        }
    }

    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        margin: 20px;

        button {
            margin-bottom: 10px;
        }
    }

`;

export const Menu = Styled.div`
    display: flex;
    width: 100%;
    
    @media (max-width: 375px) {
        visibility: ${props => props.open ? 'visible' : 'hidden'};
        position: fixed;
        height: 100%;
        background-color: var(--Almost-White);
        top: 0;
        right: 0;
        width: ${props => props.open ? '63%' : '0'};
        flex-direction: column;
        box-shadow: 0px 100px 10000px 100px hsl(0, 0%, 0%);
        z-index: 100;
        transition: all 0.4s ease;        
    }

`;


export const UlFestures = Styled.ul`
    display: ${props => props.open ? 'block' : 'none'};
    position: absolute;
    top: 60px;
    left: ${props => props.left };
    background-color: var(--Almost-White);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px hsl(0, 0%, 41%);
    align-items: center;
    padding: 20px 20px 15px 20px;

    li{
        line-height: 2rem;
        align-items: center;
        text-align: left;
    }
    img{
        margin-right: 10px;
        width: 16px;
    }

    @media (max-width: 375px) {
        display: ${props => props.open ? 'block' : 'none'};
        position: relative;
        left: auto;
        box-shadow: none;
        top: auto;
        padding-top: 0;
    }



`;