import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

interface CategoriesProps {
  categories: Category[];
}

const CategoriesSlider = ({ categories }: CategoriesProps) => {
  return (
    <div id="slider" className="px-5 mb-5">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        loop
        watchSlidesProgress
        navigation
        breakpoints={{
          768: {
            slidesPerView: categories.length <= 3 ? categories.length : 4,
            enabled: categories.length <= 3 ? false : true
          },
          375: {
            slidesPerView: 2,
            enabled: categories.length <= 2 ? false : true
          }
        }}
        className="mySwipe"
      >
        {categories.map((category, i) => {
          return (
            <SwiperSlide key={i} className="relative grid place-items-center">
              <div className={`h-[250px] w-[350px]`}>
                <Image
                  src={category.images[0].src}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute bottom-10">
                <Link href={{ pathname: 'products', query: { category: category.slug } }}>
                  <a className="bg-secondary text-white text-sm hover:bg-primary hover:text-secondary transition-all duration-200 px-9 py-3 font-medium">
                    {category.name.toUpperCase()}
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;