import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import './Checkout.css'


const Checkout = ({ cart, price }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('ERR: ', error);
            setCardError(error.message);
        } else {
            console.log('Payment Method: ', paymentMethod);
            setCardError('');
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // save payment information to server 
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
                date: new Date(),
                menuItems: cart.map(item => item.menuId),
                cartItems: cart.map(item => item._id),
                status: 'pending',
                itemName: cart.map(item => item.name)
            };


            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                })

        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="text-center mt-16">
                    <button className="btn btn-primary w-1/3" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600 mt-6">{cardError}</p>}
            {transactionId && <p className="text-green-600 mt-6">Payment complete. TransactionId : {transactionId}</p>}
        </>
    );
};

export default Checkout;