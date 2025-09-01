import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../Shared/cover/Cover';
import coverimg from '../../assets/shop/banner3.jpg'
import { useState } from 'react';
import Usemenu from '../../hooks/Usemenu';
import FoodCard from '../../components/foodCard/FoodCard';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, settabIndex] = useState(initialIndex)
    const [menu] = Usemenu();

    console.log(category);
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')

    return (
        <div>

            <Cover img={coverimg}></Cover>



            <Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
                <TabList className='hover:bg-white  text-center sm:grid-cols-1 mb-20 mt-10'>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drink</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10'>
                        {
                            salad.map(item => <FoodCard key={item._id}
                                item={item}

                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10'>
                        {
                            soup.map(item => <FoodCard key={item._id}
                                item={item}

                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>

                    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10'>
                        {
                            pizza.map(item => <FoodCard key={item._id}
                                item={item}

                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10'>
                        {
                            dessert.map(item => <FoodCard key={item._id}
                                item={item}

                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10'>
                        {
                            drinks.map(item => <FoodCard key={item._id}
                                item={item}

                            ></FoodCard>)
                        }
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;