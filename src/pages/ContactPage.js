import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ContactForm from '../components/ContactForm';
import '../styles/ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/amrambouskila" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/amrambouskila" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                {/* Add other social media links here */}
            </div>
            <ContactForm /> {/* Include the ContactForm component */}
        </div>
    );
};

export default ContactPage;
