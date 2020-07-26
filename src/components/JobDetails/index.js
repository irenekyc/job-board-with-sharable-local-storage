import { useEffect, Fragment, useState } from "react";
import Head from 'next/head';
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'

const JobDetailsPage = ({ id, data }) => {
    const [url, setURL] = useState(null)
    const router = useRouter()

    useEffect(() => {
        if (id) {
            const history = JSON.parse(localStorage.getItem('broswedJob') || '[]');
            const updatedHistory = history.concat(id);
            localStorage.setItem('broswedJob', JSON.stringify(updatedHistory))
            console.log(router)

        }


    }, [id])
    const calculateTime = (createdAt) => {
        const now = new Date()
        const difference = now - new Date(createdAt)
        return (Math.ceil(difference / 1000 / 60 / 60 / 24))

    }

    return <Fragment>
        {data ? (<Fragment>
            <Head>
                <title>  {data.title} - Jobify</title>
                <meta property='og:title' content={data.title} key='ogTitle' />
                <meta property='og:site_name' content='Jobify: Find your dream developer job' key='ogSiteName' />
                <meta
                    name='description'
                    content='Find your dream developer job in here, we offer job search specialised in developer, remote, paid relocation opportunities!'
                    key='description'
                />
                <meta
                    property='og:description'
                    content='Find your dream developer job in here, we offer job search specialised in developer, remote, paid relocation opportunities!'
                    key='ogDescription'
                />
                <meta property='og:image' content='' key='ogImage' />
                <link href="https://fonts.googleapis.com/css2?family=Monofett&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="job-page-container">
                <div className="job-page-header">
                    {data.title}
                </div>
                <div className="job-page-main">
                    <div className="job-page-share">
                        <p> Share to your friends:  <a href={`https://api.whatsapp.com/send?text=Checkout this job: ${data.title} here: ${data.url}`} target="_blank" data-action="share/whatsapp/share"><span> Whatsapp</span> </a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://jobify-peach.vercel.app/details/42280cbe-448f-4902-9034-4703c932a3ba&title=${data.company}+is+Looking+for${data.title}`} target="_blank"> LinkedIn</a>
                        </p>
                    </div>
                    <div className="job-page-details">
                        <div className="job-company-logo">
                            <img src={data.company_logo} alt={data.company} />
                        </div>
                        <p className="description-text"> {data.company}</p>
                        <p className="secondary-text"> Location: {data.location}</p>
                        <p className="secondary-text"> Post at {calculateTime(data.created_at)} day(s) ago </p>
                        <div className="description-box description-text">
                            Description: <ReactMarkdown source={data.description} />
                        </div>
                    </div>
                    <div className="job-page-apply">
                        <h3 className="primary-text"> How to Apply</h3>
                        <ReactMarkdown source={data.how_to_apply} />
                    </div>

                </div>
            </div>
        </Fragment>) : (<div>Loading...</div>)}
    </Fragment>
}
export default JobDetailsPage