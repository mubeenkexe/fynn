import style from './discoverComponent.module.css';
import FeaturedBook from './FeaturedBook/FeaturedBook';
import { DUMMY_FEATURED_BOOK } from '@/constants';

const DiscoverComponent = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Discover.</h1>
            <FeaturedBook {...DUMMY_FEATURED_BOOK} />
        </div>
    );
};

export default DiscoverComponent;
