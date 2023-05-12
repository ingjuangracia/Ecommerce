import "../styles/productDetail.css";
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addToCart } from '../store/slices/cart.slice';
import { filterCategory } from '../store/slices/products.slice';

const ProductDetail = () => {

    const [product, setProduct] = useState({})

    const [quantity, setQuantity] = useState("")

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const productsList = useSelector(state => state.products);

    useEffect(() => {
        axios.get(`https://e-commerce-api.academlo.tech/api/v1/products`)
            .then(res => {
                console.log(res.data.data.products)
                res.data.data.products.find(productItem => productItem.id === Number(id))
                const productSearched = res.data.data.products.find(productItem => productItem.id === Number(id))
                console.log(productSearched);
                setProduct(productSearched);
                dispatch(filterCategory(productSearched?.category.id));
            });

    }, [id, dispatch])

    console.log(product)

    const addProductCart = () => {
        const productCart = {
            id,
            quantity,

        };
        dispatch(addToCart(productCart));
    };





    return (
        <div className="productDetailCont">
            <h1>Product Details</h1>
            <h2>{product?.title}</h2>
            <h3>{product?.description}</h3>
            <img className="imgProductDetail" src={product?.productImgs?.[1]} alt="" />
            <h3>Price $ {product?.price}</h3>
            <input
                type="number"
                placeholder="0"
                onChange={e => setQuantity(e.target.value)}
                value={quantity}
            />
            <button onClick={addProductCart}>Add to Cart</button>

            <h2>Discover Similar Items</h2>

            <ul className="ContainerCard">
                {

                    productsList?.map(productList => (
                        <li className="productCard" onClick={() => navigate(`/product/${productList.id}`)}>
                            
                            <img className="imgCard" src={productList.productImgs[2]} alt="" />
                            <h4>{productList.title}</h4>
                            <h4> Price $ {product.price}</h4>


                        </li>

                    ))
                }
            </ul>


        </div>
    );
};


export default ProductDetail;