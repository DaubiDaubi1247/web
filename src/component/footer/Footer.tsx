import React from 'react';

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center footer bg-black">
            <p>Copyright © {new Date().getFullYear()} React Bootstrap. Built with Docusaurus.</p>
        </footer>
    );
};

export default Footer;