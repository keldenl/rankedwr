import Head from "next/head";
import { useRouter } from "next/router";
import { BASE_URL } from "../api";


export function SocialHeader({
    title: rawTitle,
    description,
    imgTallSrc = '/assets/social-preview.png',
    imgSrc = '/assets/social-preview.png'
}) {
    const router = useRouter()
    const title = `${rawTitle} - RankedWR`
    const url = `https://rankedwr.com${router.pathname}`

    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imgSrc} />
            <meta property="og:url" content={url} />

            <meta name="twitter:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content={imgTallSrc} />
        </Head>
    )
}