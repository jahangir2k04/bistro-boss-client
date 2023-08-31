import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../Shared/MenuItem";
import popularImg from '../../assets/menu/salad-bg.jpg'

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="max-w-6xl mx-auto mt-12 mb-20">
            <SectionTitle heading='Popular Menu' subHeading='Check it Out'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                {
                    popular.map(item => <MenuItem key={item._id} item={item} coverImg={popularImg}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="bg-[#E8E8E8] hover:bg-black uppercase text-xl text-orange-600 border-b-4 px-7 py-4 rounded-lg border-orange-600">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;