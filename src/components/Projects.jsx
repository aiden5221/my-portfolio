import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from "react-on-screen";
import 'animate.css';
const Projects = () => {
    let pepe = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'
    const projects = [
        {
            title:'React Task Tracker',
            description:'A simple task tracking React SPA',
            imgUrl: 'https://user-images.githubusercontent.com/72046405/187979396-f29dd497-356a-4ba1-820a-09dd9d95883c.png',
            repoUrl: 'https://github.com/aiden5221/ReactJS-TaskManager',
        },
        {
            title:'Crown Clothing Store',
            description:'Fully functional store created using Redux, Redux Sagas, Stripe payment, Typescript, React-Router and Firebase for authentication!',
            imgUrl: 'https://user-images.githubusercontent.com/72046405/188022390-e492f090-600f-4577-acdf-aa6e883f8bd7.png',
            repoUrl: 'https://github.com/aiden5221/StoreProj',
        },
        {
            title:'Showtime Express',
            description:'Showtime Express is an interactive movie nomination application that allows the user to select 5 of their favorite movies queried from the OMDB API. Created using React, Redux and Material UI.',
            imgUrl: 'https://user-images.githubusercontent.com/72046405/190945631-2c0ba1e0-2e1e-43f0-a8bc-a882ce7980fd.png',
            repoUrl: 'https://github.com/aiden5221/Showtime-Express',
        },
        {
            title:'Project 4',
            description:'Description 4',
            imgUrl: pepe,
            repoUrl: '',
        },
    ]

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible }) => 
                        <div className={isVisible ? 'animate__animated animate__slideInDown ' : ''}>
                            <h2>Projects</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cum mollitia ea porro, ut iusto labore placeat vel laborum fugiat eligendi impedit deleniti quae doloremque soluta ratione totam nesciunt dignissimos.</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="project-tabs" defaultActiveKey='first'>
                            <Tab.Content className="projects">
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                        project 2
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                        project 3
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
                <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}

export default Projects;