import React from 'react';
import Menuitem from '../Shared/Menuitem';
import Cover from '../Shared/cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className=''>
            <div className='mb-20'>  {title && <Cover img={img} title={title}></Cover>}</div>


            <section className='mb-20  grid  md:grid-cols-2 gap-4 ml-4 mr-2 '>

                {

                    items.map(item => <Menuitem

                        key={item._id}
                        item={item}
                    ></Menuitem>)
                }
            </section>
            <Link to={`/order/${title}`}>
                <button className="btn bg-yellow-500 hover:bg-gray-300 mb-5 mt-5 ml-5">
                    Order now
                </button>
            </Link>
        </div>
    );
};

export default MenuCategory;