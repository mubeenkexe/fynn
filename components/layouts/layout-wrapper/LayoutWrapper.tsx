interface LayoutWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const LayoutWrapper = ({ children, className }: LayoutWrapperProps) => {
    return <div className={`${className} layout`}>{children}</div>;
};

export default LayoutWrapper;
