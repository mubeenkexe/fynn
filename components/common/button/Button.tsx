"use client";

import React from "react";
import style from "./Button.module.css";
import { useRouter } from "next/navigation";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type: "button" | "submit" | "reset";
    className?: string;
    href?: string;
}
const Button = ({ children, onClick, type, className, href }: ButtonProps) => {
    const router = useRouter();
    const handleClick = () => {
        if (href) {
            router.push(href);
        } else if (onClick) {
            onClick();
        }
    };
    return (
        <button
            onClick={handleClick}
            type={type}
            className={`${style.button} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
