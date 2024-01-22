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
        `${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();
      const options = result.data.map((city) => {
        console.log(city);
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name} ${city.countryCode}`,
        };
      });
      console.log(result);
      return options;
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (searchData) => {
    setSearch(searchData); // ?
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
