import React from 'react';
import PropTypes from 'prop-types';


function SearchControls({ data: { count }, changeOffset, offSet }) {
  const disableLow = offSet === 0 ? true : false;
  const disableHigh = offSet > count - 10 ? true : false;


  return (
    <div>
      <section>
              Total Results: {count}
        <br />
              Current Page: {offSet / 10 + 1}
      </section>
      <button 
        disabled={disableLow} 
        onClick={() => changeOffset('DOWN')} >PREV</button>
      <button 
        disabled={disableHigh} 
        onClick={() => changeOffset('UP')} >NEXT</button>
    </div>
  );


}

SearchControls.propTypes = {
  data: PropTypes.object,
  changeOffset: PropTypes.func.isRequired,
  offSet: PropTypes.number.isRequired
};

export default SearchControls;

