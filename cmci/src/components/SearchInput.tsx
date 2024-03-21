import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IProps {
  onSearch: (value: string) => void;
}
const SearchInput: React.FC<IProps> = ({ onSearch }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        id="icon"
        name="icon"
        className="py-2 px-4 ps-11 block w-full border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
