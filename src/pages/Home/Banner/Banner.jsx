import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS

// Local imports (example)



export const Banner = () => {
  // Optional event handlers
  const onChange = (index, item) => console.log("Slide changed to:", index, item);
  const onClickItem = (index, item) => console.log("Item clicked:", index, item);
  const onClickThumb = (index, item) => console.log("Thumbnail clicked:", index, item);

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      infiniteLoop
      autoPlay
      interval={3000}
      stopOnHover
    >
      <div className="hero h-[700px]">
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="slide1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/2229125723/photo/japanese-curry-rice-with-stir-fried-pork-fluffy-omelet-corn-bean-sprouts-and-broccoli-in-bowl.jpg?b=1&s=612x612&w=0&k=20&c=bN29dV6jI1MTIbsQq2i3WhZc7lq6nxvGjOJAcTuUQlU=" alt="slide2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/182431884/photo/catering.jpg?s=1024x1024&w=is&k=20&c=MCMhJc0o4SzoqCdXNQVUofNobVO2d9HNCW0en-88H1M=" alt="slide3" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg" alt="slide4" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/06/strawberry-cheesecake-slice-with-mint-garnish.webp" alt="slide5" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/838927480/photo/onam-sadya-on-a-banana-leaf.jpg?b=1&s=612x612&w=0&k=20&c=yQxHt8JdrJLJ_HhiwJtz5KY6rVUdkVDyf7e60KX6tm4=" alt="slide6" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
};
