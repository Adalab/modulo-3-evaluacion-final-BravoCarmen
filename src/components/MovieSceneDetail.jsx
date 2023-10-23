import { Link } from 'react-router-dom';

function MovieSceneDetail({ scene }) {
  return (
    <>
      <article>
        <img src={scene.poster} alt='Poster' className='details__poster' />
        <h2 className='details__title'>{scene.movie}</h2>
        <h3 className='details__line'>{scene.fullLine}</h3>
        <p className='details__director'>Director:{scene.director}</p>
        <a href={scene.audio} className='details__audio' target='blank'>
          Escuchar audio
        </a>
      </article>

      <Link to='/' className='back'>
        ← Volver
      </Link>
    </>
  );
}

export default MovieSceneDetail;
