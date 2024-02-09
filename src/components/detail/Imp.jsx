import React, { useEffect } from 'react';

function Imp() {
  useEffect(() => {
    const loadScripts = async () => {
      
      const glightboxScript = document.createElement('script');
      glightboxScript.src = 'vendor/glightbox/js/glightbox.min.js';
      document.body.appendChild(glightboxScript);

      const swiperScript = document.createElement('script');
      swiperScript.src = 'vendor/swiper/swiper-bundle.min.js';
      document.body.appendChild(swiperScript);


      const frontScript = document.createElement('script');
      frontScript.src = 'js/front.js';
      document.body.appendChild(frontScript);
    };

    loadScripts();

    return () => {

    };
  }, []); 

  return (
    <div className="page-holder">
    </div>
  );
}

export default Imp;
