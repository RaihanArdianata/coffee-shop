import Image from 'next/image';
import React from 'react'
import mountains from '../assets/FOODSHED_358.jpg'

const MyImage = ({ imgURL, width, height }) => {
    return (
        <Image
            loader={() => { return imgURL }}
            src={'me.png'}
            alt="Picture of the author"
            layout="responsive"
            sizes="100%"
            width={width?? 700}
            height={height?? 475}
            style={{width: '100%'}}
        />
    )
}


const Title = ({ text }) => {
    return (
        <p className='font-darker font-bold  md:text-4xl text-3xl py-5 from-neutral-700'>
            {text}
        </p>
    );
};

const SubTitle = ({ text }) => {
    return (
        <p className='font-darker font-semibold md:text-2xl text-lg py-5 from-neutral-700'>
            {text}
        </p>
    );
};

const Button = ({text, primary}) => {
    return(
        <div className={`cursor-pointer md:text-base text-sm border-2 border-black w-fit p-4 hover:bg-black ${!primary? 'hover:text-white': 'hover:text-orange-400'}`}>
            {text}
        </div>
    )
}

function Content({ imgURL, title, subTitle, button, imgRight, widthImage, heightImage}) {
    return (
        <div className={`flex  gap-5 md:justify-between items-end md:w-11/12 md:flex-nowrap flex-wrap w-screen md:px-2 justify-center`}>
            <div className={`${imgRight? 'order-last' : ''} md:w-1/2 w-3/4`}> 
                <MyImage imgURL={imgURL} height={heightImage} width={widthImage} />
            </div>
            <div className='text-left md:w-1/2 w-3/4 gap-3 flex flex-col'>
                <Title text={title} />
                {
                    subTitle && subTitle.map((text, index) => {
                        return(
                            <SubTitle text={text} key={index}/>
                        )
                    })
                }
                <div className='flex md:flex-col flex-row gap-5'>
                    {
                        button && button.map((button, index) => {
                            return(

                                <Button text={button.text} primary={button.isPrimary} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Content