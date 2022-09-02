import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meter1 from '../assets/img/meter1.svg';
import Meter2 from '../assets/img/meter2.svg';
import Meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills  
                            </h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque commodi ad alias numquam ipsum quam amet, debitis architecto dolor cum doloribus voluptate, quo nihil odio, atque quod magni tenetur fugiat!</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'> 
                                <div className="item">
                                    <img src={Meter1} alt="skill image" />
                                    <h5>Web Development 1</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter2} alt="skill image" />
                                    <h5>Web Development 2</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter3} alt="skill image" />
                                    <h5>Web Development 3</h5>
                                </div>
                                <div className="item">
                                    <img src={Meter1} alt="skill image" />
                                    <h5>Web Development 4</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
      )
}

export default Skills;