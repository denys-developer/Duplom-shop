import React from 'react';
import Catalog from './catalog/Catalog';
import './shop-style.css';

export default function Shop() {

  return (
    <div style={{ display: 'flex' , justifyContent:'space-around' }}>

      <Catalog />
    </div>
  )
};
