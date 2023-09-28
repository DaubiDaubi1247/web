import React from 'react';

const Footer = () => {
    return (
        <footer className="justify-center footer bg-black text-white">
            <p>Copyright © {new Date().getFullYear()} React Bootstrap. Built with Docusaurus.</p>
        </footer>
    );
};

export default Footer;