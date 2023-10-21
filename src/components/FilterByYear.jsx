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
      <label htmlFor='search_year'>
        <select
          name='search_year'
          id='search_year'
          value={yearFilter}
          onChange={handleSelect}
        >
          <option selected value=''>
            All
          </option>
          {renderYearsOptions()}
        </select>
      </label>
    </>
  );
}

export default FilterByYear;
