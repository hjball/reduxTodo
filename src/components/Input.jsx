import React from 'react';

export default ({ input, handleChange }) => (
  <input type='text' value={ input } onChange={ e => handleChange(e.currentTarget.value) } />
)
