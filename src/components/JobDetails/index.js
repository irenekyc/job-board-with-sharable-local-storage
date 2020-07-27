import { useEffect, Fragment } from "react";
import Head from 'next/head';
import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'
import { getDisplayName } from "next/dist/next-server/lib/utils";

const JobDetailsPage = ({ id, data }) => {
    const router = useRouter()

    useEffect(() => {
        if (data) {
            const history = JSON.parse(localStorage.getItem('testingBrowsed') || '[]');
            console.log(history)
            const updatedHistory = history.concat({ id: id, title: data.title, company: data.company })
            localStorage.setItem('testingBrowsed', JSON.stringify(updatedHistory))
        }
    }, [data])
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
                    content={`${data.company} is looking for ${data.title}`}
                    key='description'
                />
                <meta
                    property='og:description'
                    content={`${data.company} is looking for ${data.title}`}
                    key='ogDescription'
                />
                {/* <meta property='og:image' content='' key='ogImage' /> */}
                <link href="https://fonts.googleapis.com/css2?family=Monofett&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="job-page-container">
                <div className="job-page-header">
                    {data.title}
                </div>
                <div className="job-page-main">
                    <div className="job-page-share">
                        <p> Share to your friends:  <a href={`https://api.whatsapp.com/send?text=Checkout this job: ${data.title} here: ${data.url}`} target="_blank" data-action="share/whatsapp/share"><span> <i className="fab fa-whatsapp"></i></span> </a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://jobify-peach.vercel.app/details/${id}&title=${data.company}+is+Looking+for${data.title}source=jobify-peach.vercel.app`} target="_blank"> <i className="fab fa-linkedin"></i></a>
                            <a href={`mailto:?&subject=${data.company}%20is%20looking%20for%20${data.title}&body=Check%20this%20out%20\nhttps://jobify-peach.vercel.app/details/${id}&title=${data.company}+is+Looking+for${data.title}`}> <i className="fas fa-envelope"></i></a>
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