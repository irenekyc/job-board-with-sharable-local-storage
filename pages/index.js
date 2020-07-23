import { Fragment, useState, useEffect } from 'react';
import MetaHead from '../src/components/Head';
import Layout from '../src/layout/Layout';
import NavBar from '../src/components/NavBar';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer'
import axios from 'axios'

const Index = ({ jobs, error }) => {
    const [loading, setLoading] = useState(true);
    const [failed, setError] = useState(false);
    const [latestJobs, setLatestJob] = useState([]);

    useEffect(() => {
        setLoading(false)
        setLatestJob(jobs)
    }, [jobs])

    useEffect(() => {
        if (error) {
            setError(true)
        }
    }, [error])

    return (
        <Fragment>
            <MetaHead />
            <Layout>
                <NavBar />
                <Main jobs={latestJobs} error={failed} loading={loading} />
                <Footer />
            </Layout>
        </Fragment>)
}

export async function getStaticProps() {
    const res = await axios.get("https://jobs.github.com/positions.json?page=0");
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