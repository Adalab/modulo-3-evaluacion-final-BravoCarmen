function MovieSceneItem({ scene }) {
  return (
    <>
      <img src={scene.poster} alt='Poster' className='item__poster' />
      <h2>{scene.movie}</h2>
      <p>{scene.year}</p>
      <p>{scene.fullLine}</p>
    </>
  );
}

export default MovieSceneItem;
