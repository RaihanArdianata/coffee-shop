import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderOrder from '../components/Navigation/Header.order.components';
import ProductSection from '../components/Sections/Product.section';
import YourOrder from '../components/Sections/Your.order.section';
import { addItemToCart } from '../store/cart';
import styles from '../styles/Home.module.css'

// const dispatch = useDispatch()

function OrderOnline() {
    const { cart } = useSelector(({cart}) => cart?? {cart:[]})
    const state = useSelector(state => state)

    console.log(state);
    const addToCart = (product) => {
        console.log(product);
        addItemToCart(product)
    }
    return (
        <div className={`${styles.container}`}>
            <HeaderOrder />
            <div className='md:grid grid-cols-4 '>
                <div className='md:col-span-3 grid-flow-row col-span-4 overflow-auto relative'>
                    <ProductSection addToCart={addToCart}/>
                </div>
                <div className='md:col-span-1 md:inline hidden'>
                    <YourOrder/>
                </div>
            </div>
        </div>
    )
}

export default OrderOnline