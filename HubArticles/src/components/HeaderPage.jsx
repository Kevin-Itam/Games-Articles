import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade,} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '/src/index.css';

const HeaderPage = () => {
  return (
    <div className='w-full  bg-slate-800'>
      <div className='h-80'>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide className="flex items-center justify-center text-black text-2xl font-bold">Slide 1</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-black text-2xl font-bold">Slide 2</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-black text-2xl font-bold">Slide 3</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-black text-2xl font-bold">Slide 4</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-black text-2xl font-bold">Slide 5</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-black text-2xl font-bold">Slide 6</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-black text-2xl font-bold">Slide 7</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-black text-2xl font-bold">Slide 8</SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-black text-2xl font-bold">Slide 9</SwiperSlide>
        </Swiper>
        
      </div>

    </div>
  )
}

export default HeaderPage
