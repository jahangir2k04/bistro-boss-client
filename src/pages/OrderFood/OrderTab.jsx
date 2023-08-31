import OrderCard from "../../components/OrderCard";


const OrderTab = ({items, image}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                items.map(item => <OrderCard
                    key={item._id}
                    item={item}
                    image={image}
                ></OrderCard>)
            }
        </div>
    );
};

export default OrderTab;