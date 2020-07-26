import { useRouter } from 'next/router'
import JobDetailsPage from '../../src/components/JobDetails'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Details = () => {
    const router = useRouter()
    const { slug } = router.query
    const [id, setId] = useState(null)
    const [loading, setLoading] = useState(true)
    const [jobDetails, setJobDeatils] = useState(null)

    useEffect(() => {
        setId(slug)
    }, [slug])

    useEffect(() => {
        const getJobDetails = async (id) => {
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`)
            setJobDeatils(res.data)
            setLoading(false)
        }
        if (id) {
            getJobDetails(id)
        }
    }, [id])
    return <JobDetailsPage id={slug} data={jobDetails} />
}

export default Details
