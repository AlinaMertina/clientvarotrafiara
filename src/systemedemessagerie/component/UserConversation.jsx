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

function UserConversation(props) {
   const myclass = props.myclass;
    return (
      <a href={"/conversation/" + myclass.idclient} style={{color:"black"}}> 
        <li className="clearfix active">
              <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar"/>
              <div className="about">
                <div className="name">{myclass.nomclient} {myclass.prenomclient}</div>
                
                {myclass.datededeconnexion !== null && (
                  <div className="status">
                    <i className="fa fa-circle online"></i> online
                  </div>
                )}
              </div>
        </li>      
      </a>
      
    );
}

export default UserConversation;