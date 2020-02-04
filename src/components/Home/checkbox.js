import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ checked = false, type = 'checkbox', name, onChange }) => (
  <input checked={checked} type={type} name={name} onChange={onChange} />
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;