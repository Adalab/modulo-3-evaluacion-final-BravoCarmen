import { Link } from 'react-router-dom';

function MovieSceneDetail({ scene }) {
  return (
    <>
      <article className='details'>
        <div className='poster-details'>
          <img src={scene.poster} alt='Poster' className='details__poster' />
        </div>
        <div>
          <h2 className='details__title'>{scene.movie}</h2>
          <h3 className='details__line'>{scene.fullLine}</h3>
          <p className='details__director'>Director:{scene.director}</p>
          <a href={scene.audio} className='details__audio' target='blank'>
            Escuchar audio
          </a>
        </div>
      </article>

      <Link to='/' className='back'>
        ← Volver
      </Link>
    </>
  );
}

export default MovieSceneDetail;
