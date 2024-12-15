import Button from '@/components/common/button';
import style from './content.module.css';

const Content = () => {
    return (
        <div className={`${style.contentContainer} layout`}>
            <div className={style.blurryBall}></div>
            <h1 className={style.contentTitle}>
                Stories that Speak to the Soul
            </h1>
            <h6 className={style.contentSubtitle}>
                Discover tales crafted with care and imagination.
            </h6>
            <Button type='button'>Start Reading</Button>
        </div>
    );
};

export default Content;
