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
import Headerclient from './Headerclient';
import Politique from './Politique';
import Gridpresentation from './Gridpresentation';
function Annonceclient() {
  return (
    <>
        <Headerclient></Headerclient>
        <Politique></Politique>
        <Gridpresentation lien={"v_view_annonceallview"} ></Gridpresentation>
    </>
  );
}

export default Annonceclient;