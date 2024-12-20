import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, onSearch, onClear }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === '') {
      onClear();
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <div className="flex items-center border rounded-xl p-2 bg-white shadow-sm">
        <img src="/magnifying-glass.png" className="pl-4" />
        <input
          className="text-[#71717A] pl-4 font-medium md:h-[50px] h-[40px] text-base sm:text-lg bg-transparent outline-none placeholder-gray-400 w-full"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;