import React from 'react'
import CategoryList from './CategoryList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utilities/cartSlice';

const Cart = () => {

    // getting cart data
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    // clear cart
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div className='text-center m-4 p-4'>
        <h1 className='text-2xl font-semibold'>Cart</h1>
        <div className="w-6/12 m-auto">
            <button className='p-4 m-2 bg-gray-600 text-white rounded-md'
            onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length ===0 &&(
                <h1>Cart Is Empty Explore Our Restaurants</h1>
            )}
            <CategoryList items={cartItems}  />    
        </div> 
    </div>
  )
}

export default Cart