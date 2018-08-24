import React from 'react';
import { connect } from 'react-redux';

const SelectProductVariant = ({ variants, activeVariant, handleClick, filters }) => {



  return (
    <div>
      {
        variants.map(variant =>
          <button onClick={()=>{handleClick(variants.indexOf(variant))}}>{variant.color}</button>
        )
      }
    </div>
  )

};

export default SelectProductVariant;
