import FilterByMovie from './FilterByMovie';
import FilterByYear from './FilterByYear';

function Filters({
  movieFilter,
  handleChangeMovie,
  yearFilter,
  handleChangeYear,
  years,
}) {
  return (
    <>
      <h2>Filtrar por...</h2>
      <form>
        <FilterByMovie
          movieFilter={movieFilter}
          handleChangeMovie={handleChangeMovie}
        />
        <FilterByYear
          yearFilter={yearFilter}
          handleChangeYear={handleChangeYear}
          years={years}
        />
      </form>
    </>
  );
}

export default Filters;
