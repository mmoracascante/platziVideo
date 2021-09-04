import React from 'react';
import PropTypes from 'prop-types';
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ title, id, cover, year, contentRating, duration }) => {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={PlayIcon} alt='Play Icon' />
          <img className='carousel-item__details--img' src={PlusIcon} alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>{ title }</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration} min`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  id: PropTypes.number,
};

export default CarouselItem;
