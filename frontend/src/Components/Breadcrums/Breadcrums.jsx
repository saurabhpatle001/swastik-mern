import React from 'react';
import './Breadcrums.css';
import { FaHome, FaAngleRight, FaShopify } from 'react-icons/fa';

const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="breadcrums">
      <div className="breadcrums-container">
        <span className="breadcrums-item">
          <FaHome /> HOME
        </span>
        <FaAngleRight className="breadcrums-separator" />
        <span className="breadcrums-item">
          <FaShopify /> SHOP
        </span>
        <FaAngleRight className="breadcrums-separator" />
        <span className="breadcrums-item">{product?.category}</span>
        <FaAngleRight className="breadcrums-separator" />
        <span className="breadcrums-item active">{product?.name}</span>
      </div>
    </div>
  );
};

export default Breadcrums;
