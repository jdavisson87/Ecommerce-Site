import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { clearItemsFromCart } from '../../redux/cart/cart.actions';
import axios from 'axios';

const StripeCheckoutButton = (props) => {
  const { price, history, clearCart } = props;
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_p9HUm2oWkfB0w3oFsXY74PcT00aPAznYZW';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        history.replace('/');
        clearCart();
        alert('Payment Successful');
      })
      .catch((err) => {
        console.log('Payment Error: ', JSON.parse(err));
        alert(
          'There was an issue processing your payment. Please be sure to use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearItemsFromCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
