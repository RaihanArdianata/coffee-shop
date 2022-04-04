import React from 'react'
import {FaInstagram} from 'react-icons/fa'


const Title = ({ text }) => {
    return (
        <p className='font-darker font-bold text-center md:text-2xl text-1xl py-5 from-neutral-700'>
            {text}
        </p>
    );
};

const TextLink = ({ text, url }) => {
    return (
        <a
            href={url}
            className="cursor-pointer font-bold px-4 py-[0.10rem] md:text-2xl  text-1xl text-black duration-100 hover:text-orange-400 hover:border-b-orange-400 hover:border-b-2"
        >
            {text}
        </a>
    );
};

function ContactSection() {
  return (
    <section>
        <Title text={'(410) 235-1881'}/>
        <div className='flex flex-col justify-center align-middle justify-items-center items-center text-center gap-2 md:gap-8'>
            <TextLink text={' Join Our Newsletter'}/>
            <Title text={'1500 Union Ave, Baltimore, MD 21211'} />
            <FaInstagram size={25}/>
        </div>
    </section>
  )
}

export default ContactSection