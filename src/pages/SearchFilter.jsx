import { useEffect, useState } from "react";

const arrayOfFruits = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "mango",
  "peach",
  "pear",
  "pineapple",
  "strawberry",
];

const useDebounce = (value, time = 250) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value, time]);

  return debouncedValue;
};

const SearchFilter = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const debouncedQuery = useDebounce(query);

  const getAutoComplete = (searchTerm) => {
    if (!searchTerm) {
      setSuggestions([]);
      return;
    }

    const filteredSuggestion = arrayOfFruits.filter((fruit) =>
      fruit.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filteredSuggestion);
  };

  useEffect(() => {
    getAutoComplete(debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruit..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <h1>Results</h1>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
