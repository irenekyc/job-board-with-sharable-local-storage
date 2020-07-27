
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData, newSearch } from '../store/actions/jobs';
import { set_filter } from '../store/actions/query';
import { getDisplayName } from 'next/dist/next-server/lib/utils';


const SearchBar = () => {
    const [query, setQuery] = useState({
        searchQuery: "",
        locationQuery: ""
    })

    const { searchQuery, locationQuery } = query

    const dispatch = useDispatch()


    const onChangeHandler = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(newSearch());
        dispatch(getData(searchQuery, locationQuery));
        dispatch(set_filter(searchQuery, locationQuery));
        setQuery({
            searchQuery: "",
            locationQuery: ""
        })
    }

    return (
        <form className="search-bar" onSubmit={submitHandler}>

            <input className="input-bar" type="text" placeholder="Job Title, Company name" name="searchQuery"
                value={searchQuery}
                onChange={(e) => onChangeHandler(e)} />
            <input className="input-bar" type="text" placeholder="Location, City, Country" name="locationQuery"
                value={locationQuery}
                onChange={(e) => onChangeHandler(e)} />

            <button className="search-button" type="submit">Search</button>
        </form>
    )
}

export default SearchBar;