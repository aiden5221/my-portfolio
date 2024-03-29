import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('home');   
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        if(window.scrollY > 50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
        window.addEventListener('scroll', onscroll)
        return () => window.removeEventListener('scroll', onscroll); 
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                    <Nav.Link href="#interests" className={activeLink === 'interests' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('interests')}>Interests</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/aidenjolleyruhn/' target='_blank'><img src={navIcon1} alt=''/></a>
                        <a href='https://github.com/aiden5221' target='_blank'><img src={navIcon2} alt=''/></a>
                        <a href='https://syntaxsorrows.wordpress.com/' target='_blank'><img src={navIcon3} alt=''/></a>
                    </div>
                    <Nav className='me-auto'>
                        <Nav.Link href='#contact' onClick={() => onUpdateActiveLink('contact')}>
                            <button className='vvd' >
                                <span>Let's Connect!</span>
                            </button>
                        </Nav.Link>
                    </Nav>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
