import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-tau-dusky.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <section className="max-w-6xl mx-auto mb-20">
            <SectionTitle heading="Testimonials" subHeading="What Our Clients Say"></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className="px-16 text-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                        className="mx-auto mb-7"
                                    />
                                    <FaQuoteLeft className="mx-auto text-7xl"/>
                                    <p className="text-xl mt-7 mb-2">{review.details}</p>
                                    <h3 className="text-3xl text-orange-600">{review.name}</h3>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;