import React from 'react';

export default ({ input, handleChange, handleClick }) => (
  <React.Fragment>
    <input type='text' value={ input } onChange={ e => handleChange(e.currentTarget.value) } />
    <input type='submit' onClick={ handleClick } />
  </React.Fragment>
)
