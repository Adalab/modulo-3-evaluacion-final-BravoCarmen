import { Link } from 'react-router-dom';

function MovieSceneItem({ scene }) {
  return (
    <>
      <Link to={'/scene/' + scene.id}>
        <a href='#'>
          <img src={scene.poster} alt='Poster' className='item__poster' />
          <h2>{scene.movie}</h2>
          <p>{scene.year}</p>
          <p>{scene.fullLine}</p>
        </a>
      </Link>
    </>
  );
}

export default MovieSceneItem;
