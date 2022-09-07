import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const toRotate = ['BackendDev', 'WebDeveloper','FrontendDev']
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)}
    },[currentText])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1)
        
        setCurrentText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                <span className='tagline'> Welcome to my Portfolio!</span>
                                <h1>{`Hi I'm Aiden,`}<span className='wrap'><br/>{'<'}{currentText}{'/>'}</span></h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam hic impedit, cumque fugiat atque minus veniam repellat itaque nisi aut vel, ipsa tempora, consequuntur necessitatibus culpa pariatur commodi? Accusantium.</p>
                                <button onClick={() => console.log('connect button')}> Let's connect <ArrowRightCircle size={25} /></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                                <img src={headerImg} alt='Header img'/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;