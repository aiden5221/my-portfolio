import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';


const Contact = () => {
    const formInitDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
           [category]: value, 
        })
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch('/.netlify/functions/send-email',{
            method:'post',
            headers:{
                'Content-Type' : 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formDetails)
        }).then(res => {
            setFormDetails(formInitDetails);
            if(res.status === 200) {
                setStatus({ success: true, message: 'Message sent successfully' });
            }else { 
                setStatus({ success: false, message: 'Something went wrong, please try again later.' })
            }
        }).catch(err => {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' })
        })
        setButtonText('Send');
    }

    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact us'/>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={onHandleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='E-mail' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type='submit' onSubmit={onHandleSubmit}><span>{buttonText}</span></button>
                                </Col>
                                </Row>
                                
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                }
                            
                        </form>
                    
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Contact;
