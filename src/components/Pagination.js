import { useSelector, useDispatch } from 'react-redux';
import { clear_filter, set_page } from '../store/actions/query';
import { getData, getLatestJob, newSearch } from '../store/actions/jobs';
import { useEffect, useState } from 'react';

const Pagination = () => {

    const dispatch = useDispatch()
    const { search, location, page, filteredSearch } = useSelector(state => state.query);
    const [hasPrev, setHasPrev] = useState(false)
    const [hasNext, setHasNext] = useState(true)

    useEffect(() => {
        if (page <= 1) { setHasPrev(false) } else {
            setHasPrev(true)
        }
    }, [page])

    const clearFilterHandler = () => {
        dispatch(newSearch())
        dispatch(clear_filter())
        dispatch(getLatestJob(1))
    }

    const PaginationHandler = (action) => {
        dispatch(newSearch())
        let newPage;
        if (action === "prev") {
            newPage = page - 1;
        } else {
            newPage = page + 1;
        }
        if (filteredSearch) {
            dispatch(getData(search, location, newPage))
        } else {
            dispatch(getLatestJob(newPage))
            dispatch(set_page(newPage))
        }
    }

    return <div className="pagination-row">
        {search && (<p className="pagination-search"> You search for <span className="filter-text">{search}</span> </p>)}
        {location && (<p className="pagination-location"> Jobs in <span className="filter-text">{location}</span></p>)}
        {search || location ? (<p className="pagination-clear" onClick={clearFilterHandler}>Clear Filter</p>) : null}
        {hasPrev && (<span onClick={() => PaginationHandler("prev")} className="pagination-prev"> Prev </span>)}
        {hasNext && (<span onClick={() => PaginationHandler("next")} className="pagination-next"> Next </span>)}
    </div>
}

export default Pagination