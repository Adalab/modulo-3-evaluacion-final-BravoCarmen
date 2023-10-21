import MovieSceneItem from './MovieSceneItem';

function MovieSceneList({ scenes }) {
  const renderScenes = scenes.map((scene) => {
    return (
      <li key={scene.id}>
        <MovieSceneItem scene={scene} />
      </li>
    );
  });

  return (
    <>
      <ul className='listScene'>{renderScenes}</ul>
    </>
  );
}

export default MovieSceneList;
