import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard'

function ProductSection({addToCart}) {

    const {products} = useSelector(({products}) => products)
    return (
        <div className='flex items-center h-full py-5 w-full flex-col'>
            {
                products.map((item, index) => {
                    return (
                        <div className='md:w-[60%] px-5 w-full flex flex-col gap-10 my-5' key={index}>
                            <p className='font-darker text-left font-bold'>{item.title}</p>
                            <div className='flex md:flex-row flex-col gap-5 flex-wrap '>
                                {
                                    item.data?.map((item, index) => {
                                        return (
                                            <ProductCard
                                                addToCart={() => addToCart(item)}
                                                key={index}
                                                title={item.title}
                                                description={item.description}
                                                price={item.price}
                                                imageURL={item.imageURL} 
                                                stock={item.stock}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductSection