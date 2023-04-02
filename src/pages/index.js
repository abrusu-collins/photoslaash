import Head from 'next/head'
import Hero from '@/components/landing_page/Hero';
import More from '@/components/landing_page/More';
import Testimonies from '@/components/landing_page/Testimonies';

export default function Home() {
  return (
    <>
      <Head>
        <title>PhotoSlaash</title>
        <meta name="description" content="Web app for compressing images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <More/>
      <Testimonies/>
    </>
  )
}
