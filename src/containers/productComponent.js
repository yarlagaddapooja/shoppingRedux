import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./productComponent.css"
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="product" key={id}>

                <Link to={`/product/${id}`}>
                    <div className="product-cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} className="image-deep " />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="price">$ {price} </div>
                                <div className="category">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })
    return (
        <> {renderList}</>
    );
};

export default ProductComponent;
