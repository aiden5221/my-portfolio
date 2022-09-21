import { Container, Row, Col, CardGroup, Card } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css';

const Experience = () => {
    const OMERS_PIC = 'https://www.thestar.com/content/dam/thestar/news/gta/2020/01/07/toronto-asks-pension-provider-how-green-are-our-investments/omers.jpg';
    const ALYPSIS_PIC = 'https://cdn.shopify.com/s/files/1/0414/6056/4130/files/Logo_New_469x.jpg?v=1649946871';
    const OMERS_URL = 'https://www.omers.com/';
    const ALYPSIS_URL = 'https://www.alypsis.com/'

    const handleRedirect = (url) => {
        window.open(url,'_blank');
    }
    return(
        <section className='experience' id='experience'>
            <Container>
                <Row >
                    <Col >
                    <TrackVisibility>
                    {({ isVisible }) => 
                        <div className={isVisible ? 'animate__animated animate__slideInDown ' : ''}>
                            <h2>Experience</h2>
                        </div>}
                    </TrackVisibility>
                        <CardGroup style={{marginBottom: '5%'}} >
                            
                            <Card border='#9F77B3' className='experience-card' style={{ backgroundColor: '#333231'}}>
                                <Card.Img onClick={() => handleRedirect(OMERS_URL)} variant='top'  className='experience-img' src={OMERS_PIC} alt='company image' />
                                <Card.Body>
                                    <Card.Title >OMERS & Oxford Properties</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Backend Developer</Card.Subtitle>
                                    <Card.Text>
                                        <ul>
                                            <li>Developed and integrated internal backend microservice solutions using a
                                                wide range of technologies, within an agile team environment.</li>
                                            <li>Coordinated with others in a team to contribute to large enterprise
                                                applications to deliver production ready services for internal use.</li>
                                        </ul>
                                       <b>Languages & Technologies Used: </b> Javascript, Java, Springboot, Kafka, GCP
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            
                            <Card className='experience-card' style={{ backgroundColor: '#333231'}}>
                                <Card.Img onClick={() => handleRedirect(ALYPSIS_URL)} variant='top' src={ALYPSIS_PIC} className='experience-img' alt='company image' />
                                <Card.Body>
                                    <Card.Title >Alypsis Inc.</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Software Developer</Card.Subtitle>
                                    <Card.Text> 
                                        <ul>
                                            <li>Collaborated with president to create an asynchronous database
                                                modification tool that utilizes Shopify, Quickbooks, and Katana’s API
                                                Capabilities. This tool reads and writes to new or existing products, and can
                                                edit many products based on search criteria.</li>
                                        </ul>
                                       <b>Languages & Technologies Used: </b> Javascript, Node.Js, REST APIs</Card.Text>
                                </Card.Body>
                            </Card>
                        
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </section>)
}

export default Experience;