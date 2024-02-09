import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './../css/styles.css';
import './../boostrap/styles.css';
import Firstheader from '../components/accueil/Firstheader';
import FiltreAccuille from './FiltreAccuille';
import Detaille from './Detaille';
function Presentationmodif(props) {
    const v_liste_annonce=props.myclass;
    console.log(props)
    const divmindetaille = useRef(null);
    const divmaxdetaille = useRef(null);
  
    const handleClick = () => {
      if (divmaxdetaille.current && divmindetaille.current) {
        console.log("kkkkkkkkkk");
        divmaxdetaille.current.style.display = 'block';
        divmindetaille.current.style.display = 'none';
      }
    };
  
    const close = () => {
      if (divmaxdetaille.current && divmindetaille.current) {
        console.log("kkkkkkkkkk2222");
        divmaxdetaille.current.style.display = 'none';
        divmindetaille.current.style.display = 'block';
      }
    };
  

    return (

        <>

    <div class="col-4 pr_colonne"  ref={divmindetaille}>
       <img src={localStorage.getItem('mappingimages') + v_liste_annonce.nomimage} className="card-img-top pr_img"></img>
       <div className='pr_description'>
            <b class='pr_titre'>{v_liste_annonce.nommarque} {v_liste_annonce.model} {v_liste_annonce.prixdevente}  AR </b>
            <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" class="pr_desc">Description</th>
                            <th scope="col" class="pr_car">caracteristique</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="pr_desc" scope="row">Localisation</th>
                            <td class="pr_car"> {v_liste_annonce.nomlocalisation}</td>
                        </tr>
                        <tr>
                            <th class="pr_desc" scope="row">categorie</th>
                            <td class="pr_car">{v_liste_annonce.nomtypevehicule}</td>
                        </tr>
                        <tr>
                            <th class="pr_desc" scope="row">Boit de vitesse</th>
                            <td class="pr_car">{v_liste_annonce.nomboitdereception}</td>
                        </tr>
                        <tr>
                            <th class="pr_desc" scope="row">Energie</th>
                            <td class="pr_car">{v_liste_annonce.nomenergie}</td>
                        </tr>
                        <tr>
                            <th class="pr_desc" scope="row"></th>
                            <td class="pr_car" ><button class="alert alert-info"  onClick={() => handleClick()} >Detaille</button></td>
                        </tr>
                        
                    </tbody>
            </table>
           
       </div>
    </div>
    <div class="container py-5 h-100 detaille_car" ref={divmaxdetaille} style={{ display: 'none' }} >
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
              <div class="card rounded-3 text-black">
                <div class="row g-0">
                  <div class="col-lg-6 image_value" 
                    style={{
                        background: `url(${localStorage.getItem('mappingimages') + v_liste_annonce.nomimage})`,
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
                    <button class="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close" onClick={close} ></button>
                      {/* <h4 class="mb-4">We are more than just a company</h4> */}
                      <p class="small mb-0 color_text">
                                        <h4> 🌟 Performance Écologique</h4>
                                        Parcourez des distances incroyables grâce à une autonomie remarquable  de <strong> {v_liste_annonce.autonomie}</strong> km.Profitez d'une efficacité énergétique exceptionnelle pour des trajets sans compromis  avec un kilometrage de <strong>{v_liste_annonce.kilometrage}</strong> km.
                                         <h4> 🔋 Motorisation Avancée</h4>
                                         Propulsé par une énergie <strong>{v_liste_annonce.nomenergie}</strong> respectueuse de l'environnement.  Une puissance impressionnante pour une conduite dynamique de capacite <strong>{v_liste_annonce.capacite}</strong>  kWh. .  
                                         <h4>  🌈 Personnalisation Inégalée</h4>
                                         Couleur: <strong>{v_liste_annonce.nomcouleur}</strong> Choisissez parmi une palette de couleurs éclatantes pour refléter votre style.Options de Portes/Places: Conçu pour répondre à vos besoins avec un nombre généreux de <strong>{v_liste_annonce.nbrporte}</strong> portes  et de <strong>{v_liste_annonce.nbrplace}</strong> places. 
                                         <h4> 💰 Prix Compétitif</h4>
                                         Un excellent rapport qualité-prix pour une voiture de cette envergure prix de <strong>{v_liste_annonce.prixdevente}</strong>  Ar.Commision de <strong>{v_liste_annonce.commission}</strong> % prix par l' entreprise.  
                                         <h4>  📏 Dimensions Précises</h4>
                                         Longueur:<strong>{v_liste_annonce.longueur}</strong> m , Largeur:<strong>{v_liste_annonce.largeur}</strong> m, Hauteur:<strong>{v_liste_annonce.hauteur}</strong>m  Des proportions idéales pour une conduite confortable et une présence sur la route.   
                                         <h4> 🛄 Espace de Chargement Spacieux</h4>
                                         Volume du Coffre:<strong>{v_liste_annonce.volumeducoffre}</strong> metre caree Ample espace pour vos bagages, courses et plus encore.
                                         <h4>📍 Localisation Idéale</h4>
                                         Disponible a  <strong>{v_liste_annonce.nomlocalisation}</strong> pour une expérience d'achat pratique.  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    {/* <Detaille myclass={v_liste_annonce} ref={divmaxdetaille} style={{ display: 'none' }} closefonction={close} ></Detaille> */}
    </>
    

    );
}
export default Presentationmodif;