import { Link } from 'react-router-dom';

function MovieSceneItem({ scene }) {
  return (
    <>
      <article className='card'>
        <img src={scene.poster} alt='Poster' className='card__poster' />
        <h2 className='card__title'>{scene.movie}</h2>
        <p className='card__yeaer'>{scene.year}</p>
        <p className='card__line'>{scene.fullLine}</p>
      </article>
    </>
  );
}

export default MovieSceneItem;
