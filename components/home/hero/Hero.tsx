import style from './hero.module.css';
import Content from './content/Content';

const Hero = () => {
    return (
        <main className={style.hero}>
            <Content />
        </main>
    );
};

export default Hero;
