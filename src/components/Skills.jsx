import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import Slider from 'react-slick';
import Skill1 from '../assets/img/skills/skill1.svg';
import Skill2 from '../assets/img/skills/skill2.svg';
import Skill3 from '../assets/img/skills/skill3.svg';
import Skill4 from '../assets/img/skills/skill4.svg';
import Skill5 from '../assets/img/skills/skill5.svg';
import Skill6 from '../assets/img/skills/skill6.svg';
import Skill7 from '../assets/img/skills/skill7.svg';
import Skill8 from '../assets/img/skills/skill8.svg';
import Skill9 from '../assets/img/skills/skill9.svg';
import Skill10 from '../assets/img/skills/skill10.svg';
import Skill11 from '../assets/img/skills/skill11.svg';
import Skill12 from '../assets/img/skills/skill12.svg';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {

    var settings = {
        className:'slider-container',
        gridMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        rows: 2,
    
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
                            <Slider {...settings} > 
                                <div>
                                    <img src={Skill1} alt="skill image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div >
                                    <img src={Skill5} alt="skill image" />
                                    <h5>Sass</h5>
                                </div>
                                <div >
                                    <img src={Skill3} alt="skill image" />
                                    <h5>React</h5>
                                </div>
                                <div >
                                    <img src={Skill2} alt="skill image" />
                                    <h5>HTML5</h5>
                                </div>
                                <div >
                                    <img src={Skill4} alt="skill image" />
                                    <h5>Git</h5>
                                </div>
                                <div >
                                    <img src={Skill5} alt="skill image" />
                                    <h5>Docker</h5>
                                </div>
                                <div >
                                    <img src={Skill6} alt="skill image" />
                                    <h5>Docker</h5>
                                </div>
        
                                <div >
                                    <img src={Skill7} alt="skill image" />
                                    <h5>Spring Boot</h5>
                                </div>
                                <div >
                                    <img src={Skill8} alt="skill image" />
                                    <h5>CSS</h5>
                                </div>
                                <div >
                                    <img src={Skill9} alt="skill image" />
                                    <h5>Google Cloud Platform</h5>
                                </div>
                                <div >
                                    <img src={Skill10} alt="skill image" />
                                    <h5>Postgres</h5>
                                </div>
                                <div >
                                    <img src={Skill11} alt="skill image" />
                                    <h5>SQL</h5>
                                </div>
                                <div >
                                    <img src={Skill12} alt="skill image" />
                                    <h5>NodeJS</h5>
                                </div>
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}

export default Skills;