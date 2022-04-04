import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/path0.svg'

function HeaderOrder() {
    return (
        <nav className="flex sticky top-0 w-full items-center justify-between flex-wrap bg-white z-10 p-6 shadow-md" >
            <div className="flex items-center flex-shrink-0 text-white mr-6" >
                <a href='/'>
                    <Logo/>
                </a>
                {/* <span className="font-semibold text-xl tracking-tight" > Tailwind CSS</span > */}
            </div >
            <div className="block lg:hidden" >
                <button className="flex items-center px-3 py-2 border rounded text-orange-400 border-orange-400 hover:text-orange-400 hover:border-white" >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg >
                </button >
            </div >
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" >
                <div className="text-sm lg:flex-grow" >
                    {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-400 mr-4" >
                        Docs
                    </a >
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-400 mr-4" >
                        Examples
                    </a >
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-orange-400" >
                        Blog
                    </a > */}
                </div >
                <div className='flex flex-row gap-2'>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-orange-400 hover:border-orange-400 hover:text-orange-400 hover:bg-white mt-4 lg:mt-0">Sign In</a>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-orange-400 border-orange-400 hover:border-transparent hover:text-white hover:bg-orange-400 mt-4 lg:mt-0">Sign Up</a>
                </div >
            </div >
        </nav >
    )
}

export default HeaderOrder