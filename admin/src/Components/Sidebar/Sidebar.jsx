import React from 'react'
import './Sidebar.css'
import add_product_icon from '../Assets/new_add_product_icon.png'  
import list_product_icon from '../Assets/new_list_product_icon.png'  
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="Add Product Icon" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="Product List Icon" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
