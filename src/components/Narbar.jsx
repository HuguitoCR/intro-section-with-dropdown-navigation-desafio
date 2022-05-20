import { Nav, Logo, Ul, Li, DivButton, Menu, UlFestures } from '../styles/Narbar.js';
import { useState } from 'react';




const Narbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenFestures, setIsOpenFestures] = useState(false);
    const [isOpenCompany, setIsOpenCompany] = useState(false);

    const handleClick = (Objeto) => {
        if(Objeto === 'Menu'){
            setIsOpenMenu(!isOpenMenu);
        }
        if(Objeto === 'Festures'){
            setIsOpenFestures(!isOpenFestures);
        }
        if(Objeto === 'Company'){
            setIsOpenCompany(!isOpenCompany);
        }
    }


    return (
        <Nav>
            <Logo src='./logo.svg' />


            <Menu open={isOpenMenu}>
                <Ul>
                    <Li onClick={()=>handleClick("Festures")}>
                        Festures { isOpenFestures ? <img src='./img/icon-arrow-up.svg' alt='FOpen1' /> : <img src='./img/icon-arrow-down.svg' alt='FOpen2' />}
                    </Li>
                    <UlFestures open={isOpenFestures} left={'100px'}>
                        <li><img src='./img/icon-todo.svg' alt='TodoList' />Todo List</li>
                        <li><img src='./img/icon-calendar.svg' alt='TodoList' />Calendar</li>
                        <li><img src='./img/icon-reminders.svg' alt='TodoList' />Reminders</li>
                        <li><img src='./img/icon-planning.svg' alt='TodoList' />Planning</li>
                    </UlFestures>
                    <Li onClick={()=>handleClick("Company")}>
                        Company { isOpenCompany ? <img src='./img/icon-arrow-up.svg' alt='COpen1' /> : <img src='./img/icon-arrow-down.svg' alt='COpen2' />}
                    </Li>
                    <UlFestures open={isOpenCompany} left={'280px'}>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </UlFestures>
                    <Li>Careers</Li>
                    <Li>About</Li>
                </Ul>

                <DivButton>
                    <button>Login</button>
                    <button>Register</button>
                </DivButton>     
            </Menu>   
    

            <button className='button' onClick={()=>handleClick("Menu")}>
            {
                isOpenMenu ? <img src='./img/icon-close-menu.svg' alt='menu-2'/> : <img src='./img/icon-menu.svg' alt='menu-1'/>
            }
            </button>
            
        </Nav>
    );
}


export default Narbar;