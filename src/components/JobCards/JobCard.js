import Link from 'next/link'


const calculateTime = (createdAt) => {
    const now = new Date()
    const difference = now - new Date(createdAt)
    return (Math.ceil(difference / 1000 / 60 / 60 / 24))

}

const JobCard = ({ data }) => {
    return <div className="job-card">
        <div className="company-logo">
            <a href={data.company_url}> <img src={data.company_logo} alt={data.company} target="_blank" /></a>
        </div>
        <a className="company-title" href={data.company_url} target="_blank">
            {data.company}
        </a>
        <Link href={`/details/${data.id}`}>
            <a className="job-title" target="_blank">
                {data.title}
            </a>
        </Link>
        <span className="location-text">
            <i className="fas fa-map-marker-alt icon-margin" /><span>{data.location}</span>
        </span>
        <span className="time-text">
            {calculateTime(data.created_at)} day(s) ago
        </span>
    </div>
}

export default JobCard;