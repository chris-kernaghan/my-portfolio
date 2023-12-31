import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/Profile-image-about1.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '@/components/TransitionEffect';


export default function Home() {
  return (
    <>
      <Head>
        <title>Chris K | Home</title>
        <meta name="Chris K Portfolio" content="Generated by Chris K" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light lg:flex-col sm:flex-col'>
        <Layout className='pt-0  md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 px-6 md:w-full'>
              <Image src={profilePic} alt="ChrisK" className={"w-full h-auto rounded-full border-double border-8 border-dark dark:border-light animate-morph lg:inline-block lg:w-full md:inline-block md:w-full' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"} />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Hello, I'm Chris Kernaghan." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <AnimatedText text="Front-end developer!" className='!text-4xl !text-left xl:!text-3xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl text-primary dark:text-primaryDark' />
              <p className='my-4 text-base font-medium md:text-sm sm:xs'>Passionate self-taught developer with a teaching background, dedicated to mastering software development and creating impactful solutions through continuous learning and innovation.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="./portfolio-cv.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                  download={true}
                >Download CV 
                <span className="w-5 h-5 ml-1 flex items-center justify-center">
                  <LinkArrow className={"w-full h-full"}></LinkArrow>
                </span>
                </Link>
                <Link href="mailto:chrisk616@hotmail.co.uk" target={"_blank"}
                  className='ml-5 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact Me</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Light-Bulb' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
