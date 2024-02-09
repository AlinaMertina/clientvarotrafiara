import React from 'react';
import { Link } from 'react-router-dom';
import './../../css/styles.css';
function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../../front/img/', false, /\.(png|jpe?g|svg)$/));
const imageObjects = [
    { name: 'Clothes', src: images[0] },
    { name: 'Shoes', src: images[1] },
    { name: 'Electronics', src: images[3] },
];

function Firstheader() {
    return (
       
            <div className='fr_nav'>
                    <ul>
                        <li className='fr_gauche'><img src={process.env.PUBLIC_URL + '/309592.png'} alt="Description de l'image"  className='fr_logo'/></li>
                        <li className='fr_droit'>Connexion</li>
                    </ul>
            </div>
    );
}

export default Firstheader;