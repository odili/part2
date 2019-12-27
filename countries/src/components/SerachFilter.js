import React from 'react';

const SerachFilter = ({ filerParam, handleFilter }) => {
  return (
    <div>
      Find Countries:
      <input type="search" value={filerParam} onChange={handleFilter} />
    </div>
  );
};

export default SerachFilter;
