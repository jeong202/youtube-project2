import React from 'react'

import { youtuberText } from '../../data/youtuber'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation, Autoplay } from 'swiper/modules';


const Youtuber = () => {
    return (
        <section id="youtuber">
            <h2>유튜버 모음</h2>
            <div className="youtuber__inner">
                <Swiper
                    slidesPerView={7}
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    centeredSlides={false}
                    className="mySwiper"
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        100: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        400: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        600: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {youtuberText.map((youtuber, key) => (
                        <SwiperSlide className="youtuber play__icon" key={key}>
                            <div className="youtuber__img">
                                <Link to={`/channel/${youtuber.channelId}`}>
                                    <img src={youtuber.img} alt={youtuber.author} />
                                </Link>
                            </div>
                            <div className="youtuber__info">
                                {youtuber.author}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <div className="youtuber">
                        <div className="youtuber__img">
                            <img src="https://yt3.googleusercontent.com/ytc/APkrFKbhOfG4WlFyaLytJO46ClElbSyxg1dQPkd-OdobzA=s176-c-k-c0x00ffffff-no-rj" alt="" />
                        </div>
                        <div className="youtuber__info">
                            Emotional Guitarist AZ
                        </div>
                    </div> */}
            </div>
        </section>
    )
}

export default Youtuber