import { Search } from 'lucide-react';

function SearchBar({ searchQuery, onChange, onSubmit, onKeyPress }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search your favorite anime..."
        value={searchQuery}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button className="search-button" onClick={onSubmit}>
        <Search size={24} />
      </button>
    </div>
  );
}

export default SearchBar;
