import React from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

const NewCollections = (props) => {
  return (
    <div className="new-collections">
      {/* Header Section */}
      <h1 className="collections-title">Explore Our <span>New Collections</span></h1>
      <p className="collections-subtitle">
        Discover the latest trends and styles tailored just for you.
      </p>
      <hr className="collections-divider" />

      {/* Grid of Items */}
      <div className="collections-grid">
        {props.data.map((item, index) => (
          <Item
            id={item.id}
            key={index}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
