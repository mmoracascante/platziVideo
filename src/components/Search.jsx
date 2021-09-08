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

const mapStateToPros = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToPros = {
  searchItem,
};

export default connect(mapStateToPros, mapDispatchToPros)(Search);
