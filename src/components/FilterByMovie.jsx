function FilterByMovie({ movieFilter, handleChangeMovie }) {
  const handleInput = (ev) => {
    handleChangeMovie(ev.target.value);
  };

  return (
    <>
      <label htmlFor='search_movie'>
        Título:
        <input
          type='text'
          name='search_movie'
          id='search_movie'
          value={movieFilter}
          onChange={handleInput}
        />
      </label>
    </>
  );
}

export default FilterByMovie;
