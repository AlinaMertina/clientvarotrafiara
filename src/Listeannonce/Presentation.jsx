import React from 'react';
import { Link } from 'react-router-dom';
import './../css/styles.css';
import './../boostrap/styles.css';
import Firstheader from '../components/accueil/Firstheader';
import FiltreAccuille from './FiltreAccuille';
function Presentation(props) {
    const v_liste_annonce=props.myclass;
    console.log(props)
    return (       
    <div class="col mb-5" >
        <div class="card h-50 w-150">
            {/* <button class="badge bg-dark text-white position-absolute pr_image"  style={{ top: '0.5rem',right:"0.5rem" }}  >  </button> */}
            {/* <IonButton class="badge bg-dark text-white position-absolute"  style={{ top: '0.5rem',right:"0.5rem" }} > Sale</IonButton> */}
            <img src={localStorage.getItem('mappingimages') + v_liste_annonce.nomimage} className="card-img-top imagescript"></img>
           
            <div class="card-body p-4" >
                <div class="text-center">
                    <h5 class="fw-bolder">{v_liste_annonce.nommarque} {v_liste_annonce.model}</h5>
                    <div class=" justify-content-center small text-warning mb-2">
                        <div class="bi-star-fill"> {v_liste_annonce.nomlocalisation}</div>
                        <br></br>
                        <div class="bi-star-fill">{v_liste_annonce.nomenergie}</div>
                        <div class="bi-star-fill">{v_liste_annonce.nomtypevehicule}</div>
                        <div class="bi-star-fill">{v_liste_annonce.nomboitdereception}</div>
                        {/* <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div>
                        <div class="bi-star-fill"></div> */}
                    </div>
                  
                    <span class="text-muted "> {v_liste_annonce.prixdevente}  AR</span>
                    Ar
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto"  >Detaille</a></div>
            </div>
        </div>
    </div>

    );
}
export default Presentation;