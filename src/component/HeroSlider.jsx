import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import dog1 from "../assets/dog1.png"
import cat1 from "../assets/cat1.png"
import cat2 from "../assets/cat2.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const sliderData = [
  {
    id: 1,
    image: dog1,
    alt: 'Golden Retriever in a red scarf',
    title: 'Cozy Winter Fashion for Your Furry Friend',
    description: 'Keep your pet warm and stylish with our new winter collection. From sweaters to boots, we have everything they need to brave the cold.',
  },
  {
    id: 2,
    image: cat1,
    alt: 'Cat wearing a cute hat and scarf',
    title: 'Pamper Your Pet with Premium Winter Gear',
    description: 'Discover durable and comfortable winter apparel designed for ultimate pet comfort and protection against the elements.',
  },
  {
    id: 3,
    image: cat2,
    alt: 'Small dog wrapped in a warm blanket',
    title: 'Snuggle Up This Season: Comfort & Care',
    description: 'Beyond clothing, explore our range of warming beds, grooming essentials, and health tips for a healthy winter season.',
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-box shadow-xl">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // The height classes are already responsive: h-[500px] for mobile, then increases for lg and xl
        className="mySwiper h-[300px] lg:h-[400px] xl:h-[500px]"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center px-4 py-8" // Added px-4 py-8 for smaller screens
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
              
              <div className="relative z-10 text-center text-white max-w-sm sm:max-w-md md:max-w-2xl px-2"> {/* Tighter max-width for mobile, added px-2 */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 drop-shadow-lg leading-tight"> {/* Reduced mb for mobile */}
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg mb-6 sm:mb-8 drop-shadow-md"> {/* Reduced text size and mb for mobile */}
                  {slide.description}
                </p>
                <button className="btn btn-primary btn-sm sm:btn-lg transform transition-transform duration-300 hover:scale-105"> {/* btn-sm for mobile, btn-lg for sm and up */}
                  Shop Winter Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;