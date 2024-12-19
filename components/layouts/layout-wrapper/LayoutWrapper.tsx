import React from 'react';
import { cn } from '@/lib/utils';

interface LayoutWrapperProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * LayoutWrapper component that wraps its children with a div element.
 * It applies the provided className along with a default 'layout' class.
 *
 * @param {LayoutWrapperProps} props - The properties for the LayoutWrapper component.
 * @param {React.ReactNode} props.children - The child elements to be wrapped.
 * @param {string} [props.className] - Additional class names to apply to the wrapper div.
 *
 * @returns {JSX.Element} The wrapped children elements within a div.
 */
const LayoutWrapper = ({ children, className }: LayoutWrapperProps) => {
    return <div className={cn(className, 'layout')}>{children}</div>;
};

export default LayoutWrapper;
