import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    
    return (
        <div className='footer'>
            <p >Copyright &copy; {year} || by <b> PENCIL<span>BOOK</span></b></p>
        </div>
    );
};

export default Footer;