import React from 'react'
import ShopBag from '../../assets/shopping-bag-svgrepo-com.svg'
import Bake from '../../assets/toast-svgrepo-com.svg'

function YourOrder() {
  return (
    <div className='fixed flex flex-col w-[-moz-available] h-[100vh] shadow-md p-10'>
        <p className='h1 font-bold'>Your Order</p>
        <div className='flex items-center justify-center flex-col h-full gap-5'>
            <div className='rounded-full w-fit bg-gray-200 p-5 flex justify-center items-center align-middle'>
                <ShopBag fill={'#999999'}/>
            </div>
            <p className='text-gray-400 font-darker text-sm'>Ready to go! </p>
            <p className='text-gray-400 font-darker text-sm'>Add items to get started</p>
        </div>
        <a href='#' className='flex flex-row justify-center text-gray-500 gap-2'>
            Powered By <Bake width={20}/> Bake & Co
        </a>
    </div>
  )
}

export default YourOrder