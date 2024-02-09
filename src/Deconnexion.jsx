import React,{useEffect} from 'react';
import App from './App';

function Deconnexion() {

  useEffect(async () => {
    try {
      const response = await fetch(localStorage.getItem('mapping')+"deconnecter",{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
      },
      body:parseFloat(localStorage.getItem("idclient"))
    });
    if (!response.ok) {
      throw new Error('Problème lors de la récupération des données');
    }
    const data = await response.json();
    // localStorage.clear();
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
  }, []);

  // /varotrafiaraback/deconnecter

  return (
   <App></App>
  );
}
export default Deconnexion;
