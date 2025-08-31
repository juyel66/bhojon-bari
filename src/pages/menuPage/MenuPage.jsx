
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/cover/Cover';
import menuimg from '../../assets/menu/banner3.jpg'
import Popularmenu from '../Home/Popularmenu';

const MenuPage = () => {
    return (
        <div>
            <Helmet>
                <title>Bhojon Bari | Menu</title>

            </Helmet>
            <Cover img={menuimg} title={'our Menu'}></Cover>
        
         
        </div>
    );
};

export default MenuPage;