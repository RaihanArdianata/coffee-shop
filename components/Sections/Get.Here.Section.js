import React from 'react'
import ContactSection from '../Contact';
import Maps from '../Maps'

const Title = ({ text }) => {
    return (
        <p className='font-darker text-center md:text-4xl font-bold text-2xl  from-neutral-700'>
            {text}
        </p>
    );
};

const TextLink = ({ text, url }) => {
    return (
        <a
            href={url}
            className="cursor-pointer px-4 py-[0.10rem] font-darker  md:text-4xl font-bold text-2xl  text-black duration-100 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2"
        >
            {text}
        </a>
    );
};

function GetHereSection() {
  return (
    <section className='my-8 flex items-center flex-col justify-between px-3 gap-4 md:w-4/6 md:gap-40'>
        <Title text={'1500 Union Ave, Baltimore, MD 21211'}/>
        <Maps/>
        <div className='flex flex-row flex-wrap justify-center'>
            <Title text={`Open every day for, `}/>
             <TextLink text={'pickup and delivery'} />
             <Title text={`8am–3pm`}/>
        </div>
        
        <ContactSection/>
    </section>
  )
}

export default GetHereSection