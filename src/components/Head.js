import Head from 'next/head';

const MetaHead = () => {
    return <Head>
        <title>  Jobify: Dev job search platform</title>
        <meta property='og:title' content='Jobify: Find your dream developer job' key='ogTitle' />
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
}

export default MetaHead;