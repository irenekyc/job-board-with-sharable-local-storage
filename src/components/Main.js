import React, { useEffect, useState } from 'react'
import JobCard from './JobCards/JobCard';
import { useSelector } from 'react-redux';
import Pagination from './Pagination'

const Main = ({ jobs, error, loading }) => {
    const [jobData, setJobs] = useState([])
    const { newSearchLoading, filtered } = useSelector(state => state.jobs)

    useEffect(() => {
        setJobs(jobs)
    }, [jobs])

    useEffect(() => {
        if (newSearchLoading) {
            setJobs([])
        }
    }, [newSearchLoading])


    useEffect(() => {
        setJobs(filtered)
    }, [filtered])

    return <main>
        <Pagination />
        <div className="container">
            {error ? (<h2>Error</h2>) :
                loading || newSearchLoading ? (<h2> Loading ...</h2>) :
                    jobData && jobData.length > 0 ? jobData.map(job => (<JobCard key={job.id} data={job} />)) :
                        jobData && jobData.length == 0 && (<h2> No result, please go back or clear filters</h2>)
            }
        </div>
    </main>
}

export default Main;