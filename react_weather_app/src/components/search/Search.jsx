/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api/api.jsx";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}?maxPopulation=10000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      else {
        const result = await response.json();
        return {
          options: result.data.map((city) => {
            return {
              value: `${city.latitude} ${city.long}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      }
    } catch (error) {
      return console.log(error);
    }
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="New York"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
