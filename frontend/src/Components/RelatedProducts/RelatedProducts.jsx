import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import { backend_url } from '../../App';

const RelatedProducts = ({ category, id }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`${backend_url}/relatedproducts`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category }),
    })
      .then((res) => res.json())
      .then((data) => setRelated(data));
  }, [category]);

  return (
    <div className="related-products">
      {/* Header Section */}
      <h1 className="related-products-title">You May Also Like</h1>
      <p className="related-products-subtitle">
        Explore similar items curated just for you.
      </p>
      <hr className="related-products-divider" />

      {/* Products Section */}
      <div className="related-products-container">
        {related.length > 0 ? (
          related.map((item, index) => {
            if (id !== item.id) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
            return null;
          })
        ) : (
          <p className="no-related-products">No related products available.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
