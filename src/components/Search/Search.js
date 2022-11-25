import { AsyncPaginate } from 'react-select-async-paginate'
import { useState } from 'react'
import { geo_api_url, geoCities } from '../api'

function Search({ onSearchChange }) {

    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
        return fetch(`${geo_api_url}/cities?namePrefix=${inputValue}`, geoCities)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name},  ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);

    }

    return (
        <AsyncPaginate
            placeholder="City"
            debounceTimeout={300}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search