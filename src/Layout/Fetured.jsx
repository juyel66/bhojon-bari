
import SectionTitle from '../components/SectionTitle';
import fetured from '../assets/home/featured.jpg';
const Fetured = () => {
    return (
        <div className='mb-20 mt-20'>
            <SectionTitle

                subHeading="chick it out"
                heading="Feature Items"

            ></SectionTitle>
            <div className='flex text-center '>
                <div className='lg:w-4/12 md: flex 4/12 w-full mx-auto h-60  '>
                    <img src={fetured} alt="" />
                </div>
                <div className=''>
                    <p className='mb-2 mr-1'>
                        Aug 31,2025 <br />
                        Food is not just something we eat for energy — <br />
                         it’s an experience, a memory, and sometimes even a way to connect with people and cultures. <br /> Food is not just something we eat for energy — <br />
                        
                    </p>
                    <p className='uppercase'>Where can i get some?</p>
                    <button className="btn btn-outline btn-primary ">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;