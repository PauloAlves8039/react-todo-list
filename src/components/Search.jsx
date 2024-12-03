const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
        <h2 class="title-color">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span class="title">Search:</span>
        </h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter to search" />
    </div>
  )
};

export default Search;