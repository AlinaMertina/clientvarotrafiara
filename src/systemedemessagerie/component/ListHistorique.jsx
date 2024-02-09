import React, { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import './../../front/vendor/glightbox/css/glightbox.min.css';
import './../../front/vendor/nouislider/nouislider.min.css';
import './../../front/vendor/choices.js/public/assets/styles/choices.min.css';
import './../../front/vendor/swiper/swiper-bundle.min.css';
import './../../front/css/style.default.css';
import './../../front/css/custom.css';

import './../../css/styles.css';
import './../../css/stylenotif.css';
import './../../boostrap/styles.css';
import Historique from './Historique';
import { differenceInDays } from 'date-fns';
import Headerclient from './Headerclient';
function ListHistorique() {
    let lista = null;
    const [listeannonce, setListeannonce] = useState(lista);
    const Initialisation = async ()=>{
        try {
          const response = await fetch(localStorage.getItem('mapping')+"v_liste_annonceshistorique",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Type de contenu de la requête
            },
            body: JSON.stringify(parseFloat(localStorage.getItem("idclient")))
          });
          if (!response.ok) {
            throw new Error('Problème lors de la récupération des données');
          }
          const data = await response.json();
          setListeannonce(data.data);
          console.log(data);
        } catch (error) {
          console.error('Erreur:', error);
          throw error;
        }
    
      }
    useEffect(() => {
        Initialisation();
        console.log("apres initialisation")
    }, []);
  return (
    <>
    <Headerclient></Headerclient>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
    <div class="container ht_content max-height-500 overflow-y-auto">
        <div class="row">
            <div class="col-lg-9 right">

                <div class="box shadow-sm rounded bg-white mb-3">
                    <div class="box-body p-0">
                        {
                            listeannonce !== null &&
                            listeannonce.slice(0, 14).map((image, index) => (
                                image !== null ? (
                                // <Presentation myclass={image} key={index}></Presentation>
                                <Historique myclass={image}></Historique>
                                // <Annonce myclass={image} key={index}></Annonce>
                                ) : null
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    </div>
    
    </>
  );
}

export default ListHistorique;