import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from "react-on-screen";
import 'animate.css';
const Projects = () => {
    let pepe = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'
    const projects = [
        {
            title:'Project 1',
            description:'Description 1',
            imgUrl: 'https://user-images.githubusercontent.com/72046405/187979396-f29dd497-356a-4ba1-820a-09dd9d95883c.png',
        },
        {
            title:'Project 2',
            description:'Description 2',
            imgUrl: pepe,
        },
        {
            title:'Project 3',
            description:'Description 3',
            imgUrl: pepe,
        },
        {
            title:'Project 4',
            description:'Description 4',
            imgUrl: pepe,
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
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>
                                        Javascript
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Option 2
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
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