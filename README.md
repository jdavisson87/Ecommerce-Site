# E-commerce Portfolio site

(https://jd87-crwn-live.herokuapp.com)

This is a project that I created while learning from the "Complete React Developer 2020(w/ Redux, Hooks, and GraphQL)" taught by Andrei Neagoie and Yihua Zhang.

## Installation

If the Heroku website is not running, please be sure to clone or download all of the files for this application. You can find these files at https://github.com/jdavisson87/Ecommerce-Site

Once you have downloaded or cloned the files, go into your terminal and be sure to download all of the node packages by running:

yarn install

After you run the install, run:

cd client && yarn start

and the application should pull up in your web browser.

## Using the Application

### Create an Account and Logging In

Upon opening the website or application, first click on the sign in button in the top right corner.
You will be redirected to the login page, where you can create an account by filling out the form.  
After you have created an account, you can login to your own personal account. You can also sign in
with Google and a personal account will be created for you using your Google credentials. If you do
not want to sign up with your own credentials, you can use the following to test the website:

Email: test@test.com
Password: 123456

### Shopping and Checking Out

If you are on the main page, you can go directly to a clothing section (hats, jackets, etc) or you can
go to the shop page. The shop page will show 4 items of each section, and allow you to click on the section to go to it's personal page. As you shop, you can add items of clothing to your shopping cart,
and view what is in your cart by clicking the shopping bag image in the top right of the page. If you are done shopping, go to the shopping bag image, and click the checkout button. On the check out page, you can increase or decrease the items in your cart, delete them all together, and purchase your items. When you select pay now, you will have to enter your email address and billing/shipping address. Then, you will have to enter in your payment information. This application uses Stripe to process payments, however, please use the given credit card information to make these purchases as this is just a portfolio application. The Credit Card information you should use is:

CC#: 4242 4242 4242 4242
EXP: 01/23
CW: 123
