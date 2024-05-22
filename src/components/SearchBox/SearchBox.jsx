const SearchBox = ({ filter, onChangeContact }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        placeholder="search..."
        value={filter}
        onChange={onChangeContact}
      ></input>
    </div>
  );
};

export default SearchBox;
