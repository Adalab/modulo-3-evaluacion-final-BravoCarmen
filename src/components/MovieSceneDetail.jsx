import { Link } from 'react-router-dom';

function MovieSceneDetail({ scene }) {
  return (
    <>
      <Link to={'/scene/' + scene.id}>
        <img src={scene.poster} alt='Poster' className='item__poster' />
        <h2>{scene.movie}</h2>
        <p>{scene.fullLine}</p>
        <p>Director:{scene.director}</p>
        <a href={scene.audio} target='_blank'>
          Escuchar el audio
        </a>
      </Link>
    </>
  );
}

export default MovieSceneDetail;
