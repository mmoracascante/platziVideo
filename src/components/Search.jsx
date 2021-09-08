import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchItem } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = ({ isHome, searchItem }) => {

  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInput = (e) => {
    //console.log(e.target.value);
    searchItem(e.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        name='search'
        type='text'
        className={inputStyle}
        placeholder='Buscar...'
        onChange={handleInput}
      />
    </section>
  );
};

const mapDispatchToPros = {
  searchItem,
};

export default connect(null, mapDispatchToPros)(Search);
