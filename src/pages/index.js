import Head from "next/head";
import Hero from "@/components/landing_page/Hero";
import More from "@/components/landing_page/More";
import Testimonies from "@/components/landing_page/Testimonies";
import Why from "@/components/landing_page/Why";
import Contact from "@/components/landing_page/Contact";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
mixpanel.init("c2d2405209ce3c42e4f2953c6859580a");

export default function Home() {
  useEffect(() => {
    mixpanel.track("Visited Homepage");
  }, []);
  return (
    <>
      <Head>
        <title>PhotoSlaash</title>
        <meta name="description" content="Web app for compressing images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <More />
      <Testimonies />
      <Why />
      <Contact />
    </>
  );
}
