/**
 * 1. install stripe and react-srtipe-js
 * 2. create a checkout form with card element 
 * 2.1 card element contains : (card number, expiration date, cvs(3 digit), zip code)
 * 3. create an account of stripe and get the publishable key: pk
 * 4. get card information 
 * 5. create a payment method 
 * 6. use test card to test payment method
 * 7. on the server side install stripe : npm install  --save stripe
 * 8. create a payment intent api with payment method type : ['card']
 * 9. make sure you provide amount in cents (multiply with 100)
 * 10. call client secret api to get client secret and set in a state
 * 11. use confirmCardPayment api with client secrete and card info]
 * 12. display confirm card error 
 * 13. display confirm card success
 * 14. do things after payment
 * */ 