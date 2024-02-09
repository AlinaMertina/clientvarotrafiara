import React from 'react';
import { Link } from 'react-router-dom';

// Importations des fichiers CSS
import './../../front/vendor/glightbox/css/glightbox.min.css';
import './../../front/vendor/nouislider/nouislider.min.css';
import './../../front/vendor/choices.js/public/assets/styles/choices.min.css';
import './../../front/vendor/swiper/swiper-bundle.min.css';
import './../../front/css/style.default.css';
import './../../front/css/custom.css';

import './../../css/styles.css';
import './../../css/stylenotif.css';
import './../../css/stylemessage.css';
import './../../css/styleheader.css';
import './../../boostrap/styles.css';


function Messagecomposent() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div class="container">
           
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/client/favorie"> </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/client/favorie">Mes Favorie</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/client">Liste Annonce</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/client/historique">Historique Annonce</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/client/discution">Message</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/deconnexion">Deconnexion</a>
                </li>

            </ul>
            </div>
        </div>
        </nav>
    </>
  );
}

export default Messagecomposent;