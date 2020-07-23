import React, { useEffect } from 'react'
import styled from 'styled-components'
import JobCard from './JobCard';
// import axios from 'axios';



const Main = ({ jobs, loading, error }) => {
    useEffect(() => {
        console.log(jobs)

    }, [loading])
    const MainSection = styled.main`
    width:100%;
    height:100%;
    display:grid;
    place-items:center;`
    const Container = styled.div`
    width:90%;
    padding: 100px 50px;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));`
    return <MainSection>
        <Container>
            {loading ? <h2> Loading ...</h2> :
                jobs.map(job => (<JobCard key={job.id}>{job.title}</JobCard>))}
        </Container>
    </MainSection>

}

export default Main;