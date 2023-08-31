import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import useMenu from "../../hooks/useMenu";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladsImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle heading="Today's Offer" subHeading="Don't miss"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} coverImg={dessertImg} title="dessert"></MenuCategory>
            <MenuCategory items={pizza} coverImg={pizzaImg} title="pizza"></MenuCategory>
            <MenuCategory items={salads} coverImg={saladsImg} title="salad"></MenuCategory>
            <MenuCategory items={soups} coverImg={soupImg} title="soup"></MenuCategory>
        </div>
    );
};

export default Menu;