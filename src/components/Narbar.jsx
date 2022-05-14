import { Nav, Logo, Ul, Li, DivButton } from '../styles/Narbar.js';

const Narbar = () => {
    return (
        <Nav>
            <Logo src='./logo.svg' />
         
            <Ul>
                <Li>Festures</Li>
                <Li>Company</Li>
                <Li>Careers</Li>
                <Li>About</Li>
            </Ul>

            <DivButton>
                <button>Login</button>
                <button>Register</button>
            </DivButton>
         
        </Nav>
    );
}


export default Narbar;