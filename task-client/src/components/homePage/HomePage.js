import React from 'react';
import SliderImage from "./SliderImage";
import glip_img from '../../images/glip_img.png';
import glip_img_right from '../../images/glip_img_right.png';
import glip_img_right_bottom from '../../images/glip_img_right_bottom.png';


const HomePage = () => {
    return (
        <div>
            <SliderImage />
            <div className="container pt-3">
                <h2 className="text-center">Glimpses</h2>
                <p className="text-center">Our workplace can be best previewed in photos</p>
                <div className="row g-3 mb-5">
                    <div className="col-7">
                        <img src={glip_img} alt="image" style={{width:"100%"}} />
                    </div>
                    <div className="col-5">
                        <div className="row g-3">
                            <div className="col-12">
                                <img src={glip_img_right} alt="image" style={{width:"100%"}} />
                            </div>
                            <div className="col-12">
                                <img src={glip_img_right_bottom} alt="image" style={{width:"100%"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;