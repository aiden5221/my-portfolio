import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, repoUrl}) => {
    return(
        <Col sm={6} md={4}>
            <a className="repo-link" href={repoUrl} target='_blank'>
            <div className='proj-imgbx' >
                <img className='project-img' src={imgUrl} alt='project card img'/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            </a>
        </Col>
    )
}

export default ProjectCard;
