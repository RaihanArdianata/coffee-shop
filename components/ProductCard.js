import Image from 'next/image'
import React from 'react'

function ProductCard({ useImage = true, imageURL, title, description, price, stock, addToCart,...props }) {
    return (
        <div onClick={addToCart} className={`md:w-[45%] w-full rounded border-2 ${stock > 0? 'hover:cursor-pointer hover:border-secondary' : ''} border-gray-200  flex flex-row h-28`}>
            <div className='grow flex flex-col justify-between p-5 w-[70%]'>
                <div className=''>
                    <p className={`font-darker truncate  text-base ${stock > 0? 'text-secondary' : 'text-gray-400'} font-bold`}>{title}</p>
                    <p className='font-darker truncate text-sm text-gray-custom pt-1'>{description}</p>
                </div>
                <p className='font-darker truncate text-base font-normal text-gray-custom'>{stock > 0?price : <i className='text-sm'>–Out of stock–</i>}</p>
            </div>
            {
                imageURL && <div className='grow-0 w-[30%] md:shrink-0'>
                    <img layout='responsive' src={imageURL} className='w-full object-cover h-full ' alt='img' />
                </div>
            }

        </div>
    )
}

export default ProductCard