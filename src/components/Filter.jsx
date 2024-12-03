const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2 class="title-color">
            <i class="fa-solid fa-filter"></i>
          <span class="title">Filter:</span>
        </h2>

        <div className="filter-options">
            <div>
                <p class="sub-title">Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </div>
            <div>
                <p class="sub-title">Alphabetical order:</p>
                <button onClick={() => setSort("Asc")} title="Ascending">
                    <i class="fa-solid fa-up-long"></i>
                    <span class="title">Asc</span>
                </button>
                <button onClick={() => setSort("Desc")} title="Descending">
                    <i class="fa-solid fa-down-long"></i>
                    <span class="title">Desc</span>
                </button>
            </div>
        </div>
    </div>
  )
};

export default Filter;