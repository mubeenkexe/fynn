import style from './hero.module.css';
import Content from './content/Content';
import Credit from '@/components/layouts/credit';

const Hero = () => {
    return (
        <main className={style.hero}>
            <Content />
            <Credit />
        </main>
    );
};

export default Hero;
