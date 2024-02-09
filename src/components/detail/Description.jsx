import React from 'react';
import { Link } from 'react-router-dom';


  function Description({ descript }) {
    return (
      <div className="tab-content mb-5" id="myTabContent">
        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
          {descript.map((product, index) => (
            <div key={index} className="p-4 p-lg-5 bg-white">
              <h6 className="text-uppercase">{product.titre}</h6>
              <p className="text-muted text-sm mb-0">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Description;
