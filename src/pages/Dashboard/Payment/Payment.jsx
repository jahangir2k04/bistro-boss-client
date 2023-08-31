import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce( (sum, item) => sum + item.price , 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className="px-20 py-10">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitle heading="Payment" subHeading="Please process"></SectionTitle>
            <div className="bg-white mt-10 p-14">
                <Elements stripe={stripePromise}>
                    <Checkout cart={cart} price={price}></Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;