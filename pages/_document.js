import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'SingaporeJS - JavaScript Meetup',
    description: 'SingaporeJS - Singapore Javascript Meetup - where we discuss Javascript and frontend related topics',
    image: 'https://secure.meetupstatic.com/photos/event/8/3/9/600_508502105.webp',
    keywords: 'Web, Front end, Community, Singapore, Software engineering, JavaScript, HTML, CSS, React, Next.js, Tailwind'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="author" content="Singapore JS" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SingaporeJS" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
 