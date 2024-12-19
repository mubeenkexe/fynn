import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type: 'button' | 'submit' | 'reset';
    className?: string;
}
const Button = ({ children, onClick, type, className }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`${style.button} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
