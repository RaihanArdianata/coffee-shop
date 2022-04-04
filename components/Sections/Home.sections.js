import React from 'react'
import Image from 'next/image'
import ContactSection from '../Contact'


const myLoader = ({ src, width, quality }) => {
    return `https://images.squarespace-cdn.com/content/v1/5f19c7897880dd1e6ad797d7/1595602830078-PMI4JW2PZUDBW5GFCKQH/CoffeeCupIsolated+copy.jpg?format=1000w`
}

const MyImage = (props) => {
    return (
        <Image
            loader={myLoader}
            src="me.png"
            alt="Picture of the author"
            width={900}
            height={600}
        />
    )
}

const Title = ({ text }) => {
    return (
        <p className='font-darker text-center md:text-6xl font-bold text-4xl py-5 from-neutral-700'>
            {text}
        </p>
    );
};

function HomeSection() {
    return (
        <section className='my-8 flex items-center flex-col justify-between px-3 gap-4  md:gap-10'>
            <Title text={'OPEN WEEKDAYS 8-3'} />
            <Title text={'& WEEKENDS 8-4'} />
            <MyImage />
            <div className='py-5'>
                <p className='py-5 font-bold font-darker md:text-5xl text-center text-2xl'>
                    1500 Union Ave, Baltimore, MD 21211
                </p>
                <div className='border-b-2 border-orange-400'/>
            </div>
            <ContactSection/>
        </section>
    )
}

export default HomeSection