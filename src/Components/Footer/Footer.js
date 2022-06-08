import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    
    return (
        <div className=' bg-black'>
            <p className=' max-w-screen-2xl mx-auto text-white text-center py-5' >Copyright &copy; {year} || by <b> PENCIL<span className=' text-amber-400'>BOOK</span></b></p>
        </div>
    );
};

export default Footer;