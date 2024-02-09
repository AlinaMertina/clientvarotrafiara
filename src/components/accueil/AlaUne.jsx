import React from 'react';
import { Link } from 'react-router-dom';

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../../front/img/', false, /\.(png|jpe?g|svg)$/));
const imageObjects = [
    { name: 'Clothes', src: images[0] },
    { name: 'Shoes', src: images[1] },
    { name: 'Electronics', src: images[3] },
];

function AlaUne() {
    return (
        <section className="pt-5">
            <header className="text-center">
                <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
                <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
            </header>
            <div className="row">
                {imageObjects.map((imageObject, index) => (
                    <div className="col-md-4" key={index}>
                        <Link to="" className="category-item">
                            <img className="img-fluid" src={imageObject.src} alt={imageObject.name} />
                            <strong className="category-item-title">{imageObject.name}</strong>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AlaUne;
