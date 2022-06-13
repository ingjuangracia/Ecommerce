import React from 'react';
import { buyProduct, getCart } from '../store/slices/cart.slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';




const AddCart = () => {

    const addCarts = useSelector(state => state.cart);

    const navigate = useNavigate();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart())


    }, [dispatch]);


    
    return (
        <div>
            <h1>My Cart</h1>
            <ul>
                {
                    addCarts.map(addCart => (

                        <li key={addCart.id} onClick={() => navigate(`/product/${addCart.id}`)}>
                            <h5>{addCart.brand}</h5>
                            <h5>{addCart.title}</h5>
                            <h5>{addCart.productsInCart.quantity}</h5>
                            <h5>{addCart.price}</h5>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => dispatch(buyProduct()) }>CheckOut</button>
        </div>
    );
};

export default AddCart;