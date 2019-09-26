const SearchBar = props => {
    return (
      <div>
        <Input
          className="search-input"
          type="text"
          value={props.searchInput}
          placeholder="search book title"
          onChange={props.handleChange}
        />
        <Button onClick={props.searchBooks}>Search</BButton>
      </div>
    );
  };
  
  export default SearchBar;