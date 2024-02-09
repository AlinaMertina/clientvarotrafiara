import React from 'react';
import { Link } from 'react-router-dom';

function importAll(r) {
    return r.keys().map(r);
}

const productImages = importAll(require.context('../../front/img/details/', false, /\.(png|jpe?g|svg)$/));
console.log("Length of productImages:", productImages.length);

function Detail_produit() {
    return (
        <div className="row m-sm-0">
            <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2">
            {productImages.map((image, index) => (
                <div className="swiper product-slider-thumbs">
                    <div className="swiper-wrapper">
                        
                            <div key={index} className="swiper-slide h-auto swiper-thumb-item mb-3">
                                <img className="w-100" src={image} alt={`Product ${index + 1}`} />
                            </div>

                    </div>
                </div>
            ))}
            </div>
            <div className="col-sm-10 order-1 order-sm-2">
                <div className="swiper product-slider">
                    <div className="swiper-wrapper">
                        {productImages.map((image, index) => (
                            <div key={index} className="swiper-slide h-auto">
                                <Link className="glightbox product-view" href={image} data-gallery={`gallery${index + 1}`} data-glightbox={`Product item ${index + 1}`}>
                                    <img className="img-fluid" src={image} alt={`Product ${index + 1}`} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail_produit;
