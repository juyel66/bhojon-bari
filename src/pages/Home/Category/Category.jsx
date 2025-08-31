import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <div>
            <section>


<SectionTitle
subHeading={"From 11.00 am t0 10.00pm"}
 heading={"Order online"}

>
   
</SectionTitle>

            </section>
          <section>
              <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide><img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://media.istockphoto.com/id/1960974311/photo/many-different-products-on-white-table-flat-lay-natural-sources-of-serotonin.webp?a=1&b=1&s=612x612&w=0&k=20&c=VvlqB-oAQtzjWFFpHe3_NrPUOlsFRjSQPSYLC9fLrbU=" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://media.istockphoto.com/id/2166737641/photo/food-and-drink-ready-to-eat-for-breakfast-in-restaurant-fried-egg-on-sandwich-with-cappuccino.webp?a=1&b=1&s=612x612&w=0&k=20&c=pcenAfdZuSh4kOp01h4vSRyl_IZkV38JdsnCak1BJ04=" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.istockphoto.com/search/2/image?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffood&utm_medium=affiliate&utm_source=unsplash&utm_term=food%3A%3A%3A&alloweduse=availableforalluses&excludenudity=true&mediatype=photography&phrase=food&sort=best" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://media.istockphoto.com/id/2166737641/photo/food-and-drink-ready-to-eat-for-breakfast-in-restaurant-fried-egg-on-sandwich-with-cappuccino.webp?a=1&b=1&s=612x612&w=0&k=20&c=pcenAfdZuSh4kOp01h4vSRyl_IZkV38JdsnCak1BJ04=" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/cappuccino-croissant.jpg.webp" alt="" /></SwiperSlide>
            </Swiper>
          </section>
        </div>
    );
};

export default Category;