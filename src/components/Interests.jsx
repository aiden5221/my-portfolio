import { Carousel } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
const Interests = () => {
    
    const interests = [
        {
            altImage: 'Lighthouse Image',
            image:require('../assets/img/lighthouseImage.JPG'),
            description:"Ever since I took a photography course during my grade 10 year of highschool I've been interested in how images are captured!",
            title:'Photography',
        },
        {
            altImage: 'NFL Logo Image',
            image:'https://frontofficesports.com/wp-content/uploads/2022/06/FOS-PM-6.27.22-NFL-2.jpg',
            description:"Since I can remember I've always watched NFL and I've always cheered for the New Orleans Saints!",
            title:'NFL',
        },
        {
            altImage: 'Football (Soccer) Image',
            image:'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
            description: "Once entering university I began becoming friends with many international students who enlightened me on the massive following that Football has, since then I've been a die hard Bayern Munich fan!",
            title:'Football (Soccer)',
        },
        {
            altImage: 'Rock Climbing Image',
            image:'https://57hours.com/wp-content/uploads/2020/09/Rock-climbing-Canada.jpg',
            description: "Living in British Columbia growing up I was introduced to the culture of rock climbing and I've loved it ever since!",
            title:'Rock Climbing',
        },
        {
            altImage: 'The Office Show Image',
            image:'https://flxt.tmsimg.com/assets/p185008_b_h10_ai.jpg',
            description:"Each actor in The Office have such great chemistry with each other and I grew attached to the great characters that were developed through all 9 seasons!\nIdentity theft isn't a joke!",
            title:'The Office (Show)',
        },
        {
            altImage: 'Gym Healthy Image',
            image:'https://classpass.com/blog/wp-content/uploads/2016/08/gym-time.jpg',
            description:"I believe that staying healthy is one of the most important things that you can spend your time on, taking care of your body and developing yourself is a great way to relieve stress after an exam!",
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
            <Carousel className="carousel-interests" fade>
                {
                    interests.map((interest) => {
                        return(
                            <Carousel.Item>
                                <img 
                                    src={interest.image}
                                    alt={interest.altImage}/>
                                <Carousel.Caption>
                                    <h3>{interest.title}</h3>
                                    <p>{interest.description}</p>
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