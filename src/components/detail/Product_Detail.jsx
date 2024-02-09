import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const ProductDetails = ({descript}) => {
  return (
    <>
      {descript.map((product, index) => (
        <div key={index} className="col-lg-6">
          <ul className="list-inline mb-2 text-sm">
            <li className="list-inline-item m-0">
              <i className="fas fa-star small text-warning"></i>
            </li>
          </ul>
          <h1>{product.titre}</h1>
          <p className="text-muted lead">{product.price}</p>
          <p className="text-sm mb-4">{product.name}</p>
          <div className="row align-items-stretch mb-4">
            <div className="col-sm-5 pr-sm-0">
              <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
                <span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                <div className="quantity">
                  <button className="dec-btn p-0">
                    <i className="fas fa-caret-left"></i>
                  </button>
                  <input className="form-control border-0 shadow-0 p-0" type="text" value="1" readOnly />
                  <button className="inc-btn p-0">
                    <i className="fas fa-caret-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3 pl-sm-0">
              <Link className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" to="/Chat">
                Contacter
              </Link>
            </div>
          </div>
          <a className="text-dark p-0 mb-4 d-inline-block" href="#!">
            <i className="far fa-heart me-2"></i>Add to wish list
          </a>
          <br />
          <ul className="list-unstyled small d-inline-block">
            <li className="px-3 py-2 mb-1 bg-white">
              <strong className="text-uppercase">SKU:</strong>
              <span className="ms-2 text-muted">039</span>
            </li>
            <li className="px-3 py-2 mb-1 bg-white text-muted">
              <strong className="text-uppercase text-dark">Category:</strong>
              <a className="reset-anchor ms-2" href="#!">
                {product.category}
              </a>
            </li>
            <li className="px-3 py-2 mb-1 bg-white text-muted">
              <strong className="text-uppercase text-dark">Tags:</strong>
              <a className="reset-anchor ms-2" href="#!">
                Innovation
              </a>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
