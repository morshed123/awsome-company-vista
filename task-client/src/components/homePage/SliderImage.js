import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./SliderImage.css";
import home_img from '../../images/home_img.png';
import Blob_img from '../../images/Blob_img.png';


const sliderImage = () => {

    const responsiveSettings = [
        {
            breakpoint: 800,
            autoplay: "true",
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
    const slideImages = [
        {
            id: 1,
            image: home_img,
            image_slider: home_img,
            caption: 'Slide 1'
        },
        {
            id: 2,
            image: home_img,
            image_slider: home_img,
            caption: 'Slide 1'
        },
    ];
    return (
        <Slide slidesToScroll={2} slidesToShow={1} indicators={true} responsive={responsiveSettings}>

            {
                slideImages.map((item, id) => (
                    <div key={id}>
                        <div className="banner_img">
                            <div className="slide_img">
                                <img src={item.image_slider} alt="image" />
                            </div>
                            <div className="banner_img_text">
                                <div className="row g-3 pt-3">
                                    <div className="col-6">
                                        <div className="text__h">
                                            <h2>A Venture with Passion</h2>
                                            <p>Continually whiteboard viral ROI with functional e-services. Enthusiastically fabricate equity invested communities rather than cross-media markets.</p>
                                            <div className="d-flex justify-content-start">
                                                <a src="#" type="button" className="btn btn_read">
                                                    <span>GET QUOTE</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="home__img">
                                            <img src={Blob_img} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </Slide>
    );
};

export default sliderImage;