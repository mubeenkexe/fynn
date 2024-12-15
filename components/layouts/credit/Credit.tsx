import Link from 'next/link';
import LayoutWrapper from '../layout-wrapper';
import { FaGithub } from 'react-icons/fa';

const Credit = () => {
    return (
        <span className="fixed bottom-0 w-full">
            <LayoutWrapper className="flex justify-center my-4 text-xs gap-1">
                Made with love by {' '}
                <Link href={'https://github.com/mubeenkexe'} className='flex items-center gap-1 font-bold font-mono'>
                    mubeenkexe
                    <FaGithub className="text-black" />
                </Link>{' '}
            </LayoutWrapper>
        </span>
    );
};

export default Credit;
