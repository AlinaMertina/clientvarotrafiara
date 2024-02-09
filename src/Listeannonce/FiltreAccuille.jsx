import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../css/styles.css';
import './../boostrap/styles.css';
import Presentation from './Presentation';
import Viewannonce from './../class/Viewannonce';
import Presentationmodif from './Presentationmodif';
import Detaille from './Detaille';
import Annonce from './Annonce';
import Annonceaccuille from '../systemedemessagerie/component/Annonceaccuille';
function FiltreAccuille() {
    let listainitiale = null;
    const [listeannonceinitiale, setListeannonceInitiale] = useState(listainitiale);
    let lista = null;
    const [listeannonce, setListeannonce] = useState(lista);
    let select=null;
    const [selectvalue , setSelectvalue]= useState(select);
    const [nbrEtoil , setNbrEtoil]= useState(select);

    const Initialisation = async ()=>{
        try {
            const response = await fetch(localStorage.getItem('mapping')+"favoriesnbr",{
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json' // Type de contenu de la requête
              }
            });
            if (!response.ok) {
              throw new Error('Problème lors de la récupération des données');
            }
            const data = await response.json();
            setNbrEtoil(data.data);
            console.log(data.data)
          } catch (error) {
            console.error('Erreur:', error);
            throw error;
          }

        try {
            const response = await fetch(localStorage.getItem('mapping')+"initialisation", {
              method: 'GET', // Méthode HTTP (peut être GET, POST, etc.)
              headers: {
                'Content-Type': 'application/json' // Type de contenu de la requête
              },
            });
            if (!response.ok) {
              throw new Error('Problème lors de la récupération des données');
            }
            const data = await response.json();
            localStorage.setItem('select',JSON.stringify(data));
            setSelectvalue(data)
          } catch (error) {
            console.error('Erreur:', error);
            throw error;
          }

        try {
          const response = await fetch(localStorage.getItem('mapping')+"v_liste_annoncesvalidee", {
            method: 'GET'
          });
          if (!response.ok) {
            throw new Error('Problème lors de la récupération des données');
          }
          const data = await response.json();
          setListeannonce(data.data);
          setListeannonceInitiale(data.data);
          console.log("listeee ");
        } catch (error) {
          console.error('Erreur:', error);
          throw error;
        }
    
      }
      function getnbretoil(idcaracteristique) {
        if(nbrEtoil!=null){
          for (let i = 0; i < nbrEtoil.length; i++) {
                if (nbrEtoil[i].idcaracteristique == parseInt(idcaracteristique)) {
                  return nbrEtoil[i].nombreEtoil;
                }
            }
        }
        return 0;
      }
      const caracterederecherche = "";
      const [caracterederecherches, setCaracterederecherche] = useState(caracterederecherche);
      const [selectEtat , setselectEtat]= useState("/");
      const [selectMarque , setselectMarque]= useState("/");
      const [selectModel , setselectModel]= useState("/");
      const [selectEnergie , setselectEnergie]= useState("/");
      const [selectLocalisation , setselectLocalisation] = useState("/");
      const [selectBoitdevitesse, setselectBoitdevitesse] = useState("/");
      const [selectTypevehicule, setselectTypevehicule] = useState("/");
      const [prixMin , setprixMin]= useState(null);
      const [prixMax , setprixMax]= useState(null);
    const handlerMin =(event)=>{
        event.preventDefault();
        setprixMin(parseFloat(event.target.value));
    }
    const handlerMax =(event)=>{
      event.preventDefault();
      setprixMax(parseFloat(event.target.value));
    }
      let bornePagination = [0, 8];
      const [bornePaginations, setBornePaginations] = useState(bornePagination);
    
      const paginationSuivant = (event) => {
        event.preventDefault();
        setBornePaginations([bornePaginations[0] + 8, bornePaginations[1] + 8]);
      };
    
      const paginationPrecedent = () => {
        if (bornePaginations[0] >= 8) {
          setBornePaginations([bornePaginations[0] - 8, bornePaginations[1] - 8]);
        }
      };
      // Fonction handler React
      
      const inputEtat = (event) => {
        event.preventDefault();
        const newValue = caracterederecherches + event.target.value+"/";
        setCaracterederecherche(newValue);
        setselectEtat(event.target.value);
        // console.log("value 11: "+newValue);
      };     

      const inputMarque = (event) => {
        event.preventDefault();
        const newValue = caracterederecherches + event.target.value+"/";
        setCaracterederecherche(newValue);
        setselectMarque(event.target.value);
        // console.log("value 11: "+newValue);
      };      
      const inputModel = (event) => {
        event.preventDefault();
        const newValue = caracterederecherches + event.target.value+"/";
        setCaracterederecherche(newValue);
        setselectModel(event.target.value);
        // console.log("value 11: "+newValue);
      };
      const inputEnergie = (event) => {
        event.preventDefault();
        const newValue = caracterederecherches + event.target.value+"/";
        setCaracterederecherche(newValue);
        setselectEnergie(event.target.value);
        // console.log("value 11: "+newValue);
      };
      const inputLocalisation = (event) => {
        event.preventDefault();
        const newValue = caracterederecherches + event.target.value+"/";
        setCaracterederecherche(newValue);
        setselectLocalisation(event.target.value);
        // console.log("localisation "+newValue);
        // console.log("value 11: "+newValue);
      };
      const inputBoitdevitesse = (event) => {
        event.preventDefault();
        const newValue = caracterederecherches + event.target.value+"/";
        setCaracterederecherche(newValue);
        setselectBoitdevitesse(event.target.value);
        // console.log("value 11: "+newValue);
      };
      const inputTypevehicule = (event) => {
        event.preventDefault();
        const newValue = caracterederecherches + event.target.value+"/";
        setCaracterederecherche(newValue);
        setselectTypevehicule(event.target.value);
        // console.log("value 11: "+newValue);
      };
      const onsubRecherche = async (event) =>{
        event.preventDefault();
        console.log("console value");
        console.log(caracterederecherches);
        let table = filtreListe(caracterederecherches);
        setListeannonce(table);
        setCaracterederecherche("");
      }
    function filtreListe(stringfiltre) {
        console.log("filtre active :"+stringfiltre)
        let tablefiltre =[];
        if (listeannonceinitiale !== null) {
            console.log("filtre");
            for (let i = 0; i < listeannonceinitiale.length; i++) {
                const annonce = listeannonceinitiale[i];
                const string = annonce.nometat +annonce.nommarque + annonce.nommodel + annonce.nomenergie + annonce.nomlocalisation + annonce.nomboitdereception + annonce.nomtypevehicule;
                const newvalue = selectEtat+"/"+selectMarque+"/"+selectModel+"/"+selectEnergie+"/"+selectLocalisation+"/"+selectBoitdevitesse+"/"+selectTypevehicule;
                console.log("valude  ee");
                console.log(newvalue);
                let tablevaleu = newvalue.split("/");
                if (tablevaleu !== null) {
                    let p = 0;
            
                    for (let a = 0; a < tablevaleu.length; a++) {
                        if (string.includes(tablevaleu[a])) {
                            p = p + 1;
                        }
                    }
                
                    if (p ===  tablevaleu.length) {
                        console.log("indice du tableau :"+i)
                        if(prixMin!=null){
                          console.log("npppppppppiiiiii");
                          if( parseFloat(listeannonceinitiale[i].prixdevente) >=prixMin && parseFloat(listeannonceinitiale[i].prixdevente)<=prixMax){
                            tablefiltre.push(listeannonceinitiale[i]);
                          }
                        }else{
                          console.log("miiiiii");
                          tablefiltre.push(listeannonceinitiale[i]);
                        }
                       
                    }
                }
            }
          setprixMax(null);
          setprixMin(null);
          setselectEtat("/")
          setselectMarque("/");
          setselectModel("/");
          setselectEnergie("/");
          setselectLocalisation("/");
          setselectBoitdevitesse("/");
          setselectTypevehicule("/");
        }
        return tablefiltre;
    }
   

    useEffect(() => {
        Initialisation();
        console.log("apres initialisation")
        
      }, []);
    return (
        <>
        <div class="main-panel" className='fl_corps'>        
            <div class="content-wrapper">
                <div class="row">
                    
                    <div class="col-md-2 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                            <h4 class="card-title">Filtre <div 
                                style={{
                                    marginLeft: '5%', // Ajoute une marge de 20 pixels de tous les côtés
                                    
                                }}
                              >
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-outline-secondary" onClick={paginationPrecedent}>1</button>
                                    <button type="button" class="btn btn-outline-secondary">X</button>
                                    <button type="button" class="btn btn-outline-secondary" onClick={paginationSuivant}>3</button>
                                    </div>
                            </div></h4>
                            {/* <p class="card-description">
                                filtre pour une bonne experience
                            </p> */}
                            <form class="forms-sample" onSubmit={onsubRecherche}>
                                <div class="form-group">
                                    <label for="exampleSelectGender">Marque</label>
                                    <select className="form-control" id="exampleSelectGender" onChange={inputMarque}>
                                    {  
                                        selectvalue !== null &&
                                        selectvalue.data !==null &&
                                        selectvalue.data.marque.map((value, index) => (
                                         value !== null ? (
                                             <option key={index} value={value.nommarque}>{value.nommarque}</option>
                                         ) : null
                                         ))
                                    }
                                    </select>

                                </div>
                                <div class="form-group">
                                    <label for="exampleSelectGender">Model</label>
                                    <select class="form-control" id="exampleSelectGender" onChange={inputModel}>
                                    {  
                                        selectvalue !== null &&
                                        selectvalue.data !==null &&
                                        selectvalue.data.model.map((value, index) => (
                                         value !== null ? (
                                             <option key={index} value={value.nommodel}>{value.nommarque} {value.nommodel}</option>
                                         ) : null
                                         ))
                                    }
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleSelectGender">Energie</label>
                                    <select class="form-control" id="exampleSelectGender" onChange={inputEnergie}>
                                        {  
                                            selectvalue !== null &&
                                            selectvalue.data !==null &&
                                            selectvalue.data.energie.map((value, index) => (
                                            value !== null ? (
                                                <option key={index} value={value.nomenergie}>{value.nomenergie}</option>
                                            ) : null
                                            ))
                                        }
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleSelectGender">Localisation</label>
                                    <select class="form-control" id="exampleSelectGender" onChange={inputLocalisation}>
                                        {  
                                            selectvalue !== null &&
                                            selectvalue.data !==null &&
                                            selectvalue.data.localisation.map((value, index) => (
                                            value !== null ? (
                                                <option key={index} value={value.nomlocalisation}>{value.nomlocalisation}</option>
                                            ) : null
                                            ))
                                        }
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleSelectGender">Boit de vitesse</label>
                                    <select class="form-control" id="exampleSelectGender" onChange={inputBoitdevitesse}>
                                        {  
                                            selectvalue !== null &&
                                            selectvalue.data !==null &&
                                            selectvalue.data.boitdevitesse.map((value, index) => (
                                            value !== null ? (
                                                <option key={index} value={value.nomboitdereception}>{value.nomboitdereception}</option>
                                            ) : null
                                            ))
                                        }
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleSelectGender">Type de vehicule</label>
                                    <select class="form-control" id="exampleSelectGender" onChange={inputTypevehicule}>
                                        {  
                                            selectvalue !== null &&
                                            selectvalue.data !==null &&
                                            selectvalue.data.typevehicule.map((value, index) => (
                                            value !== null ? (
                                                <option key={index} value={value.nomtypevehicule}>{value.nomtypevehicule}</option>
                                            ) : null
                                            ))
                                        }
                                    </select>
                                </div>
                               
                                <div class="form-group row">
                                    <div class="col">
                                    <label>Prix min</label>
                                    <div id="the-basics">
                                        <input class="typeahead" type="text" placeholder="min" onChange={handlerMin} />
                                    </div>
                                    </div>
                                    <div class="col">
                                    <label>Prix max</label>
                                    <div id="bloodhound">
                                        <input class="typeahead" type="text" placeholder="max" onChange={handlerMax}/>
                                    </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary mr-2">Rechercher</button>
                            </form>
                            </div>
                        </div>
                        
                    </div>
                       
                   
                       

                        <section class="py-5 col-md-6 grid-margin stretch-card fl_droit">
                            <div class="container px-4 px-lg-5 mt-5">
                                        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                         
                                            {
                                                listeannonce !== null &&
                                                listeannonce.slice(bornePaginations[0], bornePaginations[1]).map((image, index) => (
                                                    image !== null ? (
                                                    // <Presentation myclass={image} key={index}></Presentation>
                                                    <Annonceaccuille myclass={image} key={index} nbretoil={getnbretoil(image.idcaracteristique)} ></Annonceaccuille>
                                                    ) : null
                                                ))
                                            }
                                         
                                        </div>
                            </div>
                        </section>
                 
                            
                           
                       
                    
                   
                </div>
                </div>
            </div>
             
         </>
    );
}

export default FiltreAccuille;