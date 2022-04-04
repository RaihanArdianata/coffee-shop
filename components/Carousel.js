import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const MyImage = ({imgURL}) => {
    return (
        <Image
            loader={() => {return imgURL}}
            src="me.png"
            alt="Picture of the author"
            width={500}
            height={700}
        />
    )
}

function CarouselComponents() {
    return (
        <Carousel autoPlay>
            <div>
                <MyImage imgURL={'https://images.squarespace-cdn.com/content/v1/5f19c7897880dd1e6ad797d7/1596648876279-ZPGQFRHD99WTBRSSXIIE/8.4.2020ArtifactCoffeeCateringMenu.jpg?format=750w'}/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <MyImage imgURL={'https://images.squarespace-cdn.com/content/v1/5f19c7897880dd1e6ad797d7/1596648876279-ZPGQFRHD99WTBRSSXIIE/8.4.2020ArtifactCoffeeCateringMenu.jpg?format=750w'}/>
                {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
                <MyImage imgURL={'https://images.squarespace-cdn.com/content/v1/5f19c7897880dd1e6ad797d7/1596648876279-ZPGQFRHD99WTBRSSXIIE/8.4.2020ArtifactCoffeeCateringMenu.jpg?format=750w'}/>
                {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
    )
}

export default CarouselComponents