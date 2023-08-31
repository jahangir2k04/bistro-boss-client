import Cover from "../Shared/Cover";
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const OrderFood = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soups = menu.filter(item => item.category === 'soup');
    const desserts = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={orderImg} title="Order Food"></Cover>

            <Tabs className="max-w-6xl mx-auto mb-20" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center text-2xl mb-12">
                    <Tab>SALADS</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={salads} image={dessertImg}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} image={dessertImg}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soups} image={dessertImg}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts} image={dessertImg}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} image={dessertImg}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;