import MovieSceneItem from './MovieSceneItem';
import { Link } from 'react-router-dom';

function MovieSceneList({ scenes }) {
  const renderScenes = scenes.map((scene) => {
    return (
      <Link key={scene.id} to={'/scene/' + scene.id}>
        <li key={scene.id}>
          <MovieSceneItem scene={scene} />
        </li>
      </Link>
    );
  });

  return (
    <>
      <ul className='listScene'>{renderScenes}</ul>
    </>
  );
}

export default MovieSceneList;
