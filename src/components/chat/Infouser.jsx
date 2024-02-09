import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { differenceInDays } from 'date-fns';

import './../../front/vendor/glightbox/css/glightbox.min.css';
import './../../front/vendor/nouislider/nouislider.min.css';
import './../../front/vendor/choices.js/public/assets/styles/choices.min.css';
import './../../front/vendor/swiper/swiper-bundle.min.css';
import './../../front/css/style.default.css';
import './../../front/css/custom.css';

import './../../css/styles.css';
import './../../css/stylenotif.css';
import './../../boostrap/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { PersonFill, PersonBadgeFill } from 'react-bootstrap-icons';


function Infouser(props) {
    const user=props.myclass;
    const currentDate = new Date();
    return (
        <div class="p-3 d-flex align-items-center border-bottom osahan-post-header">
           
           {user.nomgenre === "Femme" ? (
            <div className="dropdown-list-image mr-3">
                    <PersonBadgeFill color="pink" size={30} />
            </div>
            ) : (
                <div className="dropdown-list-image mr-3">
                     <PersonFill color="blue" size={30} />
                </div>
            )}
            <div class="font-weight-bold mr-3">
                <div class="mb-2"><span class="font-weight-normal">  {user.nomclient}  {user.prenomclient} </span> </div>
                <div class="mb-2"><span class="font-weight-normal">  {user.nomlocalisation}  {user.tel} </span> </div>
                <a href={"/conversation/" + user.idclient} ><button type="button" class="btn btn-outline-success btn-sm" >Conversation</button></a>
            </div>

            <span class="ml-auto mb-auto">
                <span class="font-weight-normal"> Nombre de jour de deconnexion </span>
                {
                    user.datededeconnexion?(
                        <div class="text-right text-muted pt-1">{differenceInDays(currentDate, user.datededeconnexion)}  </div>
                    ):null
                }
               
            </span>
        </div>
    );
}

export default Infouser;