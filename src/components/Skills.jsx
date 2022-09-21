import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skill1 from '../assets/img/skill1.svg';
import Skill2 from '../assets/img/skill2.svg';
import Skill3 from '../assets/img/skill3.svg';
import Skill4 from '../assets/img/skill4.svg';
import Skill5 from '../assets/img/skill5.svg';
import Skill6 from '../assets/img/skill6.svg';


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
                            <p>My technical skills! <br/>These are changing everyday and advancing further as I continue to grow and learn more!</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'> 
                                <div className="item">
                                    <img src={Skill1} alt="skill image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill5} alt="skill image" />
                                    <h5>Sass</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill3} alt="skill image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill2} alt="skill image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill4} alt="skill image" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={Skill6} alt="skill image" />
                                    <h5>Docker</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}

export default Skills;