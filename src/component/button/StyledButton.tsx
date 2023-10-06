import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text : string,
}

const StyledButton : React.FC<ButtonProps> = ({type, text, onClick, className}) => {

    return (
        <button
            className={"bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded " + className}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
};

export default StyledButton;