import React, { useState } from 'react';
import "../styles/homeProdCard.css";
import { useEffect } from 'react';
import { filterCategory, filterHeadline, getProducts } from '../store/slices/products.slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../store/slices/cart.slice';
import axios from 'axios';


const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);


    const { id } = useParams();


    const products = useSelector(state => state.products)

    const addProductCart = () => {
        const productCart = {
            id,


        };
        dispatch(addToCart(productCart));
    };




    useEffect(() => {
        dispatch(getProducts());

        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
            .then(res => setCategories(res.data.data.categories))

    }, [dispatch]);

    const filterProducts = () => {
        dispatch(filterHeadline(search));
    }

    const selecCategory = (id) => {
        dispatch(filterCategory(id))

    }

    console.log(categories)

    return (
        <div className="containerHome">
            <ul className="contCategName">
                <h2>Categories</h2>
                {
                    categories?.map(category => (
                        <li className="categoryName" key={category.id} onClick={() => selecCategory(category.id)}>
                            {category.name}
                        </li>
                    ))
                }
            </ul>

            <div className="inputSearch">
                <input 
                    type="text"
                    placeholder="Type a product"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
                <button onClick={filterProducts}>Search</button>
            </div>
            
            <ul className="ContainerCard">
                {
                    products.map(product => (
                        <li className="productCard" key={product.id} onClick={() => navigate(`product/${product.id}`)}>
                            <img className="imgCard" src={product.productImgs[2]} alt="" />
                            <h4>{product.title}</h4>
                            <h4> Price $ {product.price}</h4>
                            <button onClick={addProductCart}>Add to Cart</button>
                        </li>

                    ))



                }
            </ul>
        </div>
    );
};

export default Home;