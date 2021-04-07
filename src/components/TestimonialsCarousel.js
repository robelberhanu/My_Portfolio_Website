import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png"

export const TestimonialsCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar1} alt="Mohamed Abubakar" />
                <div className="myCarousel">
                    <h3>Mohamed Abubakar</h3>
                    <p>Lorem20h</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="MohamedS" />
                <div className="myCarousel">
                    <h3>Mohamed Abubakar</h3>
                    <p>Lorem20h</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="Mohamed Abubdakar" />
                <div className="myCarousel">
                    <h3>Mohamed Abubakar</h3>
                    <p>Lorem20h</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="Mohfvcamed Abubakar" />
                <div className="myCarousel">
                    <h3>Mohamed Abubakar</h3>
                    <p>Lorem20h</p>
                </div>
            </>
        </Carousel>
    )
}
export default TestimonialsCarousel


