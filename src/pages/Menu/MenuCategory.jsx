import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";


const MenuCategory = ({items, coverImg, title}) => {
    return (
        <section className=" mt-12 mb-20">
            { title && <Cover img={coverImg} title={title}></Cover>}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                {
                    items.map(item => <MenuItem key={item._id} item={item} coverImg={coverImg}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`} className="bg-[#E8E8E8] uppercase text-xl border-b-4 px-7 py-4 rounded-lg border-orange-600">
                    <button>Order Your Favorite Food</button>
                </Link>
            </div>
        </section>
    );
};

export default MenuCategory;