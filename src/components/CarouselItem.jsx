import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';
import RemoveIcon from '../assets/static/remove-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {

  const { title, id, cover, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      title, id, cover, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = (id) => {
    props.deleteFavorite(id);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__details--img'
            src={PlayIcon}
            alt='Play Icon'
          />
          {isList ? (
            <img
              className='carousel-item__details--img'
              onClick={() => handleDeleteFavorite(id)}
              src={RemoveIcon}
              alt='Play Icon'
            />
          ) : (
            <img
              className='carousel-item__details--img'
              onClick={handleSetFavorite}
              src={PlusIcon}
              alt='Plus Icon'
            />
          )}

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

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
