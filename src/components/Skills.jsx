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
import Skill13 from '../assets/img/skills/skill13.svg';
import Skill14 from '../assets/img/skills/skill14.svg';
import Skill15 from '../assets/img/skills/skill15.svg';
import Skill16 from '../assets/img/skills/skill16.svg';
import Skill17 from '../assets/img/skills/skill17.png';
import Skill18 from '../assets/img/skills/skill18.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {

    const responsive = [
        {
          breakpoint: 3000,
          settings:{
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1024,
          settings:{
            slidesToShow: 3
          }
        },
        {
          breakpoint: 464,
          settings:{
            slidesToShow: 2
          }
        },
        {
          breakpoint: 0,
          settings:{
            slidesToShow: 1
          }
          
        }
    ];

    var settings = {
        className:'slider-container',
        gridMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        rows: 2,
        responsive: responsive,
    };

    const skillsData = [
        { header: 'Javascript', src: Skill1 },
        { header: 'HTML5', src: Skill2 },
        { header: 'React', src: Skill3 },
        { header: 'Git', src: Skill4 },
        { header: 'Sass', src: Skill5 },
        { header: 'Docker', src: Skill6 },
        { header: 'Spring Boot', src: Skill7 },
        { header: 'CSS', src: Skill8 },
        { header: 'Google Cloud Platform', src: Skill9 },
        { header: 'Postgres', src: Skill10 },
        { header: 'SQL', src: Skill11 },
        { header: 'NodeJS', src: Skill12 },
        { header: 'Firebase', src: Skill13 },
        { header: 'MongoDB', src: Skill14 },
        { header: 'Python', src: Skill15 },
        { header: 'Django', src: Skill16 },
        { header: 'Blue Prism', src: Skill17 },
        { header: 'UI Path', src: Skill18 }
      ];

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
                                {
                                    skillsData.map((skill, index) => (
                                        <div className="skill-item" key={index}>
                                          <img src={skill.src} alt="skill" />
                                          <h5>{skill.header}</h5>
                                        </div>
                                      ))
                                }
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}

export default Skills;