import { Carousel } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
const Interests = () => {
    
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


    const interests = [
        {
            altImage: 'Lighthouse Image',
            image:require('../assets/img/lighthouseImage.JPG'),
            title:'Photography',
        },
        {
            altImage: 'NFL Logo Image',
            image:'https://frontofficesports.com/wp-content/uploads/2022/06/FOS-PM-6.27.22-NFL-2.jpg',
            title:'NFL',
        },
        {
            altImage: 'Football (Soccer) Image',
            image:'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
            title:'Football (Soccer)',
        },
        {
            altImage: 'Rock Climbing Image',
            image:'https://57hours.com/wp-content/uploads/2020/09/Rock-climbing-Canada.jpg',
            title:'Rock Climbing',
        },
        {
            altImage: 'The Office Show Image',
            image:'https://flxt.tmsimg.com/assets/p185008_b_h10_ai.jpg',
            title:'The Office (Show)',
        },
        {
            altImage: 'Gym Healthy Image',
            image:'https://classpass.com/blog/wp-content/uploads/2016/08/gym-time.jpg',
            title:'Staying Healthy',
        },
    ]
    
    return(
        <section className='interests' id='interests'>
            <TrackVisibility>
            {({ isVisible }) => 
                            <div className={isVisible ? 'animate__animated animate__slideInDown ' : ''}>
                                <h2 className="heading-interests">Interests</h2>
                            </div>}
                            </TrackVisibility>
            <Carousel responsive={responsive} className="carousel-interests" fade>
                {
                    interests.map((interest) => {
                        return(
                            <Carousel.Item>
                                <div className="image">
                                <img 
                                    src={interest.image}
                                    alt={interest.altImage}/>
                                </div>
                                <Carousel.Caption>
                                    <h3>{interest.title}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>    
        </section>    
    )
}

export default Interests;