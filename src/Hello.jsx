
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './front/vendor/glightbox/css/glightbox.min.css';
import './front/vendor/nouislider/nouislider.min.css';
import './front/vendor/choices.js/public/assets/styles/choices.min.css';
import './front/vendor/swiper/swiper-bundle.min.css';
import './front/css/style.default.css';
import './front/css/custom.css';
import Header from './components/accueil/Header';
import Footer from './components/accueil/Footer';
import EnTete from './components/accueil/EnTete';
import AlaUne from './components/accueil/AlaUne';
import Contenu from './components/accueil/Contenu';
import Firstheader from './components/accueil/Firstheader';
import Contente1 from './Listeannonce/Contente1';
import FiltreAccuille from './Listeannonce/FiltreAccuille';
import Presentation from './Listeannonce/Presentation';
import Detaille from './Listeannonce/Detaille';
import ViewAllConversation from './systemedemessagerie/component/ViewAllConversation';
import Page from './components/chat/Page';
import Messagecomposent from './systemedemessagerie/component/Messagecomposent';
import Headerclient from './systemedemessagerie/component/Headerclient';
import AccuilleAlogin from './systemedemessagerie/component/AccuilleAlogin';
function Hello() {
  localStorage.setItem("mappingnode","http://localhost:5000")
  localStorage.setItem('mapping', 'https://varotrafiaraoccasion-production.up.railway.app/varotrafiaraback/');
  localStorage.setItem('mappingimages', 'https://varotrafiaraoccasion-production.up.railway.app/images/');
  localStorage.setItem("mappingtoken",'https://varotrafiaraoccasion-production.up.railway.app/client/');
  const initializeMapping = async () => {
      
  };
  useEffect(() => {
    initializeMapping();
  }, []);
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" exact component={AccuilleAlogin} />
    //     </Routes>
    //   </div>
    // </Router>
    // <Headerclient></Headerclient>
    // <Messagecomposent></Messagecomposent>
    // <Page></Page>
    // <ViewAllConversation></ViewAllConversation>
    // <Detaille/>
   
    // <Presentation></Presentation>
    // <FiltreAccuille></FiltreAccuille>
    // <Contente1></Contente1>
    // <Firstheader/>
    <div className="page-holder">
      <Header />
      <div className="container"> 
        <EnTete />
        {/* <AlaUne /> */}
        <section className="py-5">
          {/* <header>
            <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
            <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
          </header> */}
            <Contente1></Contente1>
        </section>   
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Hello;
