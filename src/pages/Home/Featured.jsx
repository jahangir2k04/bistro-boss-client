import featuredImg from '../../assets/home/featured.jpg'
import SectionTitle from '../../components/SectionTitle';

const Featured = () => {
    return (
        <div className="featuredBg bg-fixed mb-20 text-white ">
            <div className='py-24 bg-gradient-to-r from-[rgba(21,21,21,0.7)] to-[rgba(0,0,0,0.7)]'>
                <SectionTitle heading="Our Featured" subHeading="Check it Out"></SectionTitle>
                <div className='max-w-6xl mx-auto md:flex justify-center items-center gap-16 mt-12 '>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div>
                        <p className="text-2xl">March 15, 2023</p>
                        <p className="text-2xl uppercase">Where Can I Get Some ?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum placeat dolor optio! Eveniet vitae quia, quae dolorem labore ipsum dolor saepe alias autem veniam omnis sunt, corrupti, totam aperiam odit ex?</p>
                        <button className="hover:bg-black uppercase text-xl border-b-4 px-7 py-5 rounded-lg">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;