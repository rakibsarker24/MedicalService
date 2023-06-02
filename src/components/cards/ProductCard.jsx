import React, { useState } from 'react'
import { Card, NavLink } from 'react-bootstrap'
import { IMAGE_URL } from '../../config'
import { useNavigate } from 'react-router-dom';
import { makeSlug } from '../../utils';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();

    const [cart, setCart] = useState([]);

    const handelAddToCart = (e, item) => {
        e.preventDefault();
        setCart(item);
        let cartItem = { product: item, quantity: 1, amount: item?.price };
        const carts =
            sessionStorage.getItem("cart") &&
            JSON.parse(sessionStorage.getItem("cart"));
        if (carts === null || carts?.length === 0) {
            sessionStorage.setItem("cart", JSON.stringify([cartItem]));
        } else if (carts?.length > 0) {
            const isInCart = carts.some((cart) => cart?.product?.id === item.id);
            let cartItems = [];
            if (isInCart) {
                cartItems = carts?.map((cart) => {
                    if (cart.product?.id === item.id) {
                        return { ...cart, quantity: cart.quantity + 1 };
                    } else {
                        return cart;
                    }
                });
            } else {
                cartItems = [...carts, cartItem];
            }

            sessionStorage.setItem("cart", JSON.stringify(cartItems));
        }

        navigate(
            `/category/${makeSlug(item?.category?.name)}-${item?.category?.id
            }/${makeSlug(item?.title)}-${item?.id}`
        );
    };
    return (
        <div>
            <Card className="pcard mb-3" style={{ width: "100%" }}>
                <Card.Img
                    variant="top"
                    src={`${IMAGE_URL}/products/${item.image}`}
                />
                <Card.Body>
                    <Card.Title className="text-center text-capitalize">
                        {item?.title}
                    </Card.Title>
                    <Card.Text className="text-center">
                        <label>Price: &nbsp;</label>
                        <span>{item?.price}</span>
                    </Card.Text>
                    <NavLink
                    className='text-center'
                        to="/addcard"
                        onClick={(e) => handelAddToCart(e, item)}
                        variant="primary"
                    >
                        Add to Card
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard