import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperSlideEffectFade() {
    return (
        <Swiper
            spaceBetween={30}
            effect="fade"
            // navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            className="mySwiper w-100 h-100"
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
        >
            <SwiperSlide>
                <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center">
                    <h1>Special For Today</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, tempora!</p>
                    <button className='btn btn-outline-light rounded-0 px-4 fs-5 py-2 mt-2'>
                        Shop Now
                    </button>
                </div>
                <img 
                    src="https://i.redd.it/msl53vqmf4xb1.jpg" 
                    className="h-100 w-100 object-fit-cover" 
                    style={{ filter: "brightness(50%)" }} 
                    alt="Special Offer"
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center">
                    <h1>Special For Today</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, tempora!</p>
                    <button className='btn btn-outline-light rounded-0 px-4 fs-5 py-2 mt-2'>
                        Shop Now
                    </button>
                </div>
                <img 
                    src="https://cdn.mos.cms.futurecdn.net/91b9e1fed3cc797650b42eefd0df94e5-1200-80.jpg" 
                    className="h-100 w-100 object-fit-cover" 
                    style={{ filter: "brightness(50%)" }} 
                    alt="Special Offer"
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center">
                    <h1>Special For Today</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, tempora!</p>
                    <button className='btn btn-outline-light rounded-0 px-4 fs-5 py-2 mt-2'>
                        Shop Now
                    </button>
                </div>
                <img 
                    src="https://cdn.mos.cms.futurecdn.net/AVEcca7TuDmt8wjaFZPkzj.jpg" 
                    className="h-100 w-100 object-fit-cover" 
                    style={{ filter: "brightness(50%)" }} 
                    alt="Special Offer"
                />
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperSlideEffectFade;
