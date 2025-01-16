import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { backend_url, currency } from '../../App';

const Item = (props) => {
  return (
    <div className="item">
      {/* Product Image with Link */}
      <Link to={`/product/${props.id}`} className="item-link" onClick={() => window.scrollTo(0, 0)}>
        <img src={`${backend_url}${props.image}`} alt={props.name} className="item-image" />
      </Link>

      {/* Product Name */}
      <p className="item-name">{props.name}</p>

      {/* Prices Section */}
      <div className="item-prices">
        <span className="item-price-new">
          {currency}
          {props.new_price}
        </span>
        {props.old_price && (
          <span className="item-price-old">
            {currency}
            {props.old_price}
          </span>
        )}
      </div>
    </div>
  );
};

export default Item
