// import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import Menuitem from '../Shared/Menuitem';
import Usemenu from '../../hooks/Usemenu';

const Popularmenu = () => {



    const [menu]=Usemenu();

    const popular =menu.filter(item=>item.category==='popular')
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch("menu.json")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             const popularItems = data.filter((item) => item.category === "popular");
    //             setMenu(popularItems);
    //         });
    // }, []);
    return (
        <div className='mb-20'>
            <section>
                <SectionTitle
                    subHeading="From our Menu"
                    heading="Popular Items"

                ></SectionTitle>
            </section>

            <section className='grid md:grid-cols-2 gap-4 ml-4 mr-2'>

                {

                    popular.map(item => <Menuitem

                        key={item._id}
                        item={item}
                    ></Menuitem>)
                }
            </section>
        </div>
    );
};

export default Popularmenu;