import React from 'react'
import CarouselComponents from '../Carousel';
import ContactSection from '../Contact';
import Content from '../Content';
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

const contentData = {
    width: '100%',
    height: 80,
    imgRight: true,
    imgURL: 'https://images.squarespace-cdn.com/content/v1/5f19c7897880dd1e6ad797d7/1595614320474-ZIRWO462WV6J9CX41QCK/FOODSHED_358.jpg?format=1000w',
    title: 'Catering',
    subTitle: [
        'All orders can be adapted to suit the occasion and your guests tastes. ',
        'Please let us know about your needs, and we will follow up with any question or an order form. ',
        'All orders are considered pending until confirmed with a deposit. We can offer our daily menu.', ,
        'For last minute orders, please call (410) 235–1881',
    ],
    button: [
        {
            text: 'Catering Request',
            isPrimary: false,
        },
        {
            text: 'Download Our Menu',
            isPrimary: true,
        }
    ]
}

function Catering() {
    return (
        <section className='my-8 flex items-center flex-col justify-between px-3 gap-4 md:w-4/6 md:gap-40'>
            <Title text={'1500 Union Ave, Baltimore, MD 21211'} />
            <Content
                button={contentData.button}
                imgRight={contentData.imgRight}
                imgURL={contentData.imgURL}
                title={contentData.title}
                subTitle={contentData.subTitle}
                widthImage={contentData.width}
                heightImage={contentData.height}
            />
            <div className=' bg-orange-400 py-10 w-screen my-10'>
                <CarouselComponents />
            </div>
            <ContactSection />
        </section>
    )
}

export default Catering