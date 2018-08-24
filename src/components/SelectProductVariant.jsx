import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

const SelectProductVariant = ({ variants, activeVariant, handleClick, filters }) => {
  return (
    <div className="SelectProductVariant">
      {variants.map(variant => (
        <button
          className={classnames(
            `SelectProductVariant-selectButton SelectProductVariant-selectButton--${variant.color}`,
            {
              'SelectProductVariant-selectButton--active':
                variants.indexOf(variant) === activeVariant,
            }
          )}
          onClick={() => {
            handleClick(variants.indexOf(variant));
          }}
        >
          {variant.color}
        </button>
      ))}
    </div>
  );
};

export default SelectProductVariant;
