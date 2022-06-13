import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchases } from '../store/slices/purchases.slice';
import { useNavigate } from 'react-router-dom';



const Purchases = () => {

    const myPurchases = useSelector(state => state.purchases);

    const navigate = useNavigate();

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPurchases());

    }, [dispatch]);



    return (
        <div>
            <h1>My Purchases</h1>
            <ul>
                {
                    myPurchases.map(purchase => (

                        <li key={purchase.cartId} onClick={() => navigate(`/product/${purchase.id}`)}>
                             
                            <h5>{purchase.createdAt}</h5>
                            <h3>{purchase.cart.products[0]?.title}</h3>
                            <h5>{purchase.cart.products[0]?.price}</h5>
                            <h5>{purchase.cart.products[0]?.productsInCart.quantity}</h5>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Purchases;