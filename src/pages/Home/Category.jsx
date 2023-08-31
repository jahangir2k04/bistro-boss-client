
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from "../../components/SectionTitle";


const Category = () => {
    return (
        <section className="max-w-6xl mx-auto mt-12 mb-20">
            <SectionTitle heading='ORDER ONLINE' subHeading='From 11:00am to 10:00pm'></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-3xl text-white -mt-16 uppercase pb-24 text-center">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-3xl text-white -mt-16 uppercase pb-24 text-center">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-3xl text-white -mt-16 uppercase pb-24 text-center">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-3xl text-white -mt-16 uppercase pb-24 text-center">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-3xl text-white -mt-16 uppercase pb-24 text-center">desserts</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;