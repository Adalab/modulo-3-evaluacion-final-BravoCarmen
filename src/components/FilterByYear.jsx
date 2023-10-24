function FilterByYear({ yearFilter, handleChangeYear, years }) {
  const handleSelect = (ev) => {
    handleChangeYear(ev.target.value);
  };

  const renderYearsOptions = () => {
    return years.map((year, index) => (
      <option key={index} value={year}>
        {year}
      </option>
    ));
  };

  return (
    <>
      <label htmlFor='search_year' className='filters__year'>
        Año
      </label>
      <select
        name='search_year'
        id='search_year'
        value={yearFilter}
        onChange={handleSelect}
      >
        <option selected value=''>
          Todos
        </option>
        {renderYearsOptions()}
      </select>
    </>
  );
}

export default FilterByYear;
