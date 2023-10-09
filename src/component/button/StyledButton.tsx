import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
}

const StyledButton : React.FC<ButtonProps> = ({type, onClick, className, children}) => {

    return (
        <button
            className={"bg-transparent hover:bg-white text-white-700 font-semibold hover:text-black py-2 px-4 border border-white-500 hover:border-transparent rounded " + className}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default StyledButton;