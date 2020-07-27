import { Fragment, useState, useEffect } from 'react';

import MetaHead from '../src/components/Head';
import NavBar from '../src/components/NavBar';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer'
import UserArea from '../src/components/UserArea';
import axios from 'axios'

const Index = ({ jobs, error }) => {
    const [loading, setLoading] = useState(true);
    const [failed, setError] = useState(false);
    const [jobsData, setJobs] = useState([]);

    useEffect(() => {
        if (jobs.length > 0) {
            setLoading(false)
            setJobs(jobs)
        }
    }, [jobs])

    useEffect(() => {
        setError(error)
    }, [error])

    return (
        <Fragment>
            <MetaHead />
            <div className="layout">
                <NavBar />
                <Main jobs={jobsData} error={failed} loading={loading} />
                <Footer />
                <UserArea />
            </div>
        </Fragment>)
}

export async function getStaticProps() {
    const res = await axios.get("https://jobs.github.com/positions.json?page=1");
    try {
        return {
            props: {
                jobs: res.data,
            }
        }
    } catch (error) {
        return {
            props: {
                error: true,
            }

        }
    }
}

export default Index;