
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/cover/Cover';
import menuimg from '../../assets/menu/banner3.jpg'
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import Usemenu from '../../hooks/Usemenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';
import pizzaImage from '../../assets/menu/pizza-bg.jpg';
import saladImage from '../../assets/menu/salad-bg.jpg';
import soupImage from '../../assets/menu/soup-bg.jpg';

const MenuPage = () => {
    const [menu] = Usemenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Bhojon Bari | Menu</title>

            </Helmet>
            <Cover img={menuimg} title={'our Menu'}></Cover>
            {/* main category */}
            <SectionTitle

                subHeading="Dont miss "
                heading="todays offers"
            >
            </SectionTitle>



            {/* Offer */}
            <MenuCategory items={offered}></MenuCategory>


            {/* Desserts item */}

            <MenuCategory items={dessert} title="dessert"
                img={dessertImage}
            ></MenuCategory>
            {/* Pizza menu */}



            <MenuCategory items={pizza} title="pizzza"
                img={pizzaImage}
            ></MenuCategory>


{/* salad */}
  <MenuCategory items={salad} title="salad"
                img={saladImage}
            ></MenuCategory>




            {/* soup */}

              <MenuCategory items={soup} title="soup"
                img={soupImage}
            ></MenuCategory>
            <div>
                
            </div>
        </div>
    );
};

export default MenuPage;