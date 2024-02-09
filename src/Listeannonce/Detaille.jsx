
import React from 'react';
import { Link } from 'react-router-dom';
import './../css/styles.css';
import './../boostrap/styles.css';
import Firstheader from '../components/accueil/Firstheader';
import FiltreAccuille from './FiltreAccuille';
import Presentation from './Presentation';
function Detaille(props) {
    const myclass=props.myclass;
    console.log(props)
    return (
        <div class="container py-5 h-100 detaille_car">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6 image_value" 
                    style={{
                        background: `url(${localStorage.getItem('mappingimages') + myclass.nomimage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        // Ajoutez d'autres styles au besoin
                    }}
                  >
                    <div class="card-body p-md-5 mx-md-4">
                      
                    </div>
                  </div>
                  <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <button class="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close" onClick={props.closefonction ? () => props.closefonction() : null} ></button>
                      {/* <h4 class="mb-4">We are more than just a company</h4> */}
                      <p class="small mb-0 color_text">
                                        <h4> 🌟 Performance Écologique</h4>
                                        Parcourez des distances incroyables grâce à une autonomie remarquable  de <strong> {myclass.autonomie}</strong> km.Profitez d'une efficacité énergétique exceptionnelle pour des trajets sans compromis  avec un kilometrage de <strong>{myclass.kilometrage}</strong> km.
                                         <h4> 🔋 Motorisation Avancée</h4>
                                         Propulsé par une énergie <strong>{myclass.nomenergie}</strong> respectueuse de l'environnement.  Une puissance impressionnante pour une conduite dynamique de capacite <strong>{myclass.capacite}</strong>  kWh. .  
                                         <h4>  🌈 Personnalisation Inégalée</h4>
                                         Couleur: <strong>{myclass.nomcouleur}</strong> Choisissez parmi une palette de couleurs éclatantes pour refléter votre style.Options de Portes/Places: Conçu pour répondre à vos besoins avec un nombre généreux de <strong>{myclass.nbrporte}</strong> portes  et de <strong>{myclass.nbrplace}</strong> places. 
                                         <h4> 💰 Prix Compétitif</h4>
                                         Un excellent rapport qualité-prix pour une voiture de cette envergure prix de <strong>{myclass.prixdevente}</strong>  Ar.Commision de <strong>{myclass.commission}</strong> % prix par l' entreprise.  
                                         <h4>  📏 Dimensions Précises</h4>
                                         Longueur:<strong>{myclass.longueur}</strong> m , Largeur:<strong>{myclass.largeur}</strong> m, Hauteur:<strong>{myclass.hauteur}</strong>m  Des proportions idéales pour une conduite confortable et une présence sur la route.   
                                         <h4> 🛄 Espace de Chargement Spacieux</h4>
                                         Volume du Coffre:<strong>{myclass.volumeducoffre}</strong> metre caree Ample espace pour vos bagages, courses et plus encore.
                                         <h4>📍 Localisation Idéale</h4>
                                         Disponible a  <strong>{myclass.nomlocalisation}</strong> pour une expérience d'achat pratique.  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
}
export default Detaille;