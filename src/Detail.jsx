
import React from 'react';
import { Link } from 'react-router-dom';

// Importations des fichiers CSS
import './front/vendor/glightbox/css/glightbox.min.css';
import './front/vendor/nouislider/nouislider.min.css';
import './front/vendor/choices.js/public/assets/styles/choices.min.css';
import './front/vendor/swiper/swiper-bundle.min.css';
import './front/css/style.default.css';
import './front/css/custom.css';

import Header from './components/accueil/Header';
import Footer from './components/accueil/Footer';
import Detail_produit from './components/detail/Detail_produit';
import ProductDetails from './components/detail/Product_Detail';
import Description from './components/detail/Description';


const descript = [
  {
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque',
    price: '$250',
    titre: 'Red digital smartwatch',
    category: ' Demo Products',
  },
];


function Detail() {
  return (
    <div class="page-holder">
      <Header />
      <div className="container"> 
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
                <Detail_produit />
            </div>
            <ProductDetails descript={descript} />
            <Description descript={descript} />
        </div>
        </div>
       </section>
      </div>
      <Footer />
    </div>

    
  );
}

export default Detail;
