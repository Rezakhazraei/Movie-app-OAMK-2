import React from 'react';
import './card.css';

function Card({movie}) {
  return (
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="movie-card">
            <img src={movie.imageUrl} alt="Preview" className='img-fluid' />
            <p>{new Date(movie.startTime).toLocaleString()} | {movie.location}</p>
            <div className="content">
                <h4>{movie.title}</h4>
                <div className="card-icons">
                <ion-icon name="add-outline"></ion-icon>
                <ion-icon name="share-outline"></ion-icon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card