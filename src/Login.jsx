// Autre.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './login/css/style.css';
import Utilisateur from './class/Utilisateur';


function Login() {
    
    const us= new Utilisateur("","");
    const [user,setUser]=useState(us);
    const inputEmail = (event) => {
        event.preventDefault();
        setUser((prevData) => ({
            ...prevData,
            pseudo: event.target.value,
            insert: prevData.insert, 
          }));
    };   
    const inputPassword = (event) => {
        event.preventDefault();
        setUser((prevData) => ({
            ...prevData,
            password: event.target.value,
            insert: prevData.insert, 
          }));
    }; 

    const onsubRecherche = async (event) =>{
        event.preventDefault();
        console.log(user);
        try {
            const response = await fetch(localStorage.getItem('mapping')+"loginfront",{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json' // Type de contenu de la requête
              },
              body: JSON.stringify(user)
            });
            if (!response.ok) {
              throw new Error('Problème lors de la récupération des données');
            }
            const data = await response.json();
           
            if(data.data!=null){
               
                localStorage.setItem("infouser",data.data.client);
                localStorage.setItem("token",JSON.stringify(data.data.token));

                localStorage.setItem("idclient",data.data.client.idclient);
                window.location.href = '/client';
            }else{
                window.location.href = '/login';
            }
           
          } catch (error) {
            console.error('Erreur:', error);
            throw error;
          }
         
    } 
 
  return (
    <section className="ftco-section">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Login to Varotra fiara</h2>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
                <div className="wrap d-md-flex">
                    <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                        <div className="text w-100">
                            <h2>Welcome to Varotra Fiara</h2>
                            <p>La création de compte se fait sur la version mobile de notre site. Nous vous invitons à créer un compte</p>
                            <a href="#" className="btn btn-white btn-outline-white">Download</a>
                        </div>
                    </div>
                    <div className="login-wrap p-4 p-lg-5">
                        <div className="d-flex">
                            <div className="w-100">
                                <h3 className="mb-4">Login</h3>
                            </div>
                            <div className="w-100">
                                <p className="social-media d-flex justify-content-end">
                                    <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook"></span></a>
                                    <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter"></span></a>
                                </p>
                            </div>
                        </div>
                        <form  className="signin-form" onSubmit={onsubRecherche} >
                            <div className="form-group mb-3">
                                <label className="label" htmlFor="name">From</label>
                                <input type="text" className="form-control" placeholder="Username" required  onChange={inputEmail}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="label" htmlFor="password">Password</label>
                                <input type="password" className="form-control" placeholder="Password" required  onChange={inputPassword}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3">Login</button>
                            </div>
                            {/* <div className="form-group d-md-flex">
                                <div className="w-50 text-left">
                                    <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="w-50 text-md-right">
                                    <a href="#">Forgot Password</a>
                                </div>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Login;
