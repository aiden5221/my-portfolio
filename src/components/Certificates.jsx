import TrackVisibility from "react-on-screen";
import AWSCERT from '../assets/img/certs/awsCert.png'
import UIPATHCERT from '../assets/img/certs/uipathCert.png'
import POWERAUTOMATECERT from '../assets/img/certs/powerautomateCert.png'
const Certificates = () => {

    const CERTIFICATES = {
        "PowerAutomate" : {
            "title": "Microsoft Certified: Power Automate RPA Developer Associate",
            "url": "https://www.credly.com/earner/earned/badge/f6b8678e-be41-4ab6-8c16-7e92eb6bf649",
            "img": POWERAUTOMATECERT
        },
        "UiPath" : {
            "title": "UiPath Academy Automation Developer Associate Training",
            "url": "https://credentials.uipath.com/c7be5d14-3f30-4fe7-a9e6-7fc84ad5cdfe#gs.cq2x88",
            "img": UIPATHCERT
        },
        "AWS" : {
            "title": "AWS Certified Developer - Associate",
            "url": "https://www.credly.com/badges/fbc7f8a3-8823-4210-90f4-0a3ce561a51d",
            "img": AWSCERT
        } 
    }

    const renderCertificate = (certificate) => {
        console.log(certificate)
        return(<div key={certificate.title} className="certificate">
          <a href={certificate.url} target="_blank" rel="noreferrer">
            <img src={certificate.img} alt={certificate.title} />
          </a>
          <p>{certificate.title}</p>
        </div>)
    }
    
      return (
        <section className="certificates-section">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? 'animate__animated animate__slideInDown' : ''}>
                <h2 className="heading-interests">Certificates</h2>
              </div>
            )}
          </TrackVisibility>
          <div className="certificate-grid">
            {Object.values(CERTIFICATES).map(renderCertificate)}
          </div>
        </section>
      );
    };

export default Certificates