import { Link } from 'react-router-dom';

function MovieSceneDetail({ scene }) {
  return (
    <>
      <img src={scene.poster} alt='Poster' className='item__poster' />
      <h2>{scene.movie}</h2>
      <h3>{scene.fullLine}</h3>
      <p>Director:{scene.director}</p>
      <a href={scene.audio} className='audio' target='blank'>
        Escuchar audio
      </a>
      <Link to='/' className='back'>
        ← Volver
      </Link>
    </>
  );
}

export default MovieSceneDetail;
