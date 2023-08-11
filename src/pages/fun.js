import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project7 from "../../public/images/projects/classic-pong.jpg";
import project8 from "../../public/images/projects/math-sprint.jpg";
import project9 from "../../public/images/projects/lizard-spock.jpg";
import project10 from "../../public/images/projects/paint-clone.jpg";
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                    </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10 dark:text-light'><GithubIcon /></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:text-base'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, summary, link, github}) => {

    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline dark:text-light md:text-base'>Visit</Link>
                    <Link href={github} target="_blank" className='w-8 dark:text-light md:w-6'><GithubIcon /></Link>                    
                </div>
            </div>
        </article>
    )
}


const fun = () => {
  return (
    <>
        <Head>
        <title>Chris K  | Just For Fun Page</title>
        <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="All Work..." className='lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <AnimatedText text="All Play!" className=' text-primary dark:text-primaryDark mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                        title="Classic Pong"
                        img={project7}
                        summary="In this game you play against the computer using your mouse as the paddle. The winner is the first to get to 7. This makes use of Advanced HTML Canvas."
                        link="https://chris-kernaghan.github.io/classic-pong/"
                        github="https://github.com/chris-kernaghan/classic-pong"
                        type="Featured Project" 
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                        title="Maths Sprint Game"
                        img={project8}
                        summary="This tests your maths skills out. You are able to choose between three difficulties and the computer will randomly select an amount of correct and incorrect questions. You have to get as many right as you can in the quickest time. Time penalties are awarded for wrong answers and your fastest time will be saved in local storage so you can compete to get the quickest score."
                        link="https://chris-kernaghan.github.io/math-sprint-game/"
                        github="https://github.com/chris-kernaghan/math-sprint-game"
                        type="Project" 
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                        title="Rock, Paper, Scissors, Lizard, Spock!"
                        img={project9}
                        summary="Taken from th show The Big Bang Theory, in the style of rock, papaer scissors. You compete against the randomly generated answers from the computer. Each time you win the confetti.js provides animated confetti on screen."
                        link="https://chris-kernaghan.github.io/lizard-spock-game/"
                        github="https://chris-kernaghan.github.io/lizard-spock-game/"
                        type="Project" 
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject 
                        title="Paint Clone"
                        img={project10}
                        summary="Making use of the Adavanced HTML Canvas, this paint clone allows you to pick between brush and eraser, choose a colour for your brush and for background and also uses local storage to enable saving of your image to work on at a later date. The saved file can also be deleted by the user once finished and downloaded as a file."
                        link="https://chris-kernaghan.github.io/paint-clone/"
                        github="https://github.com/chris-kernaghan/paint-clone"
                        type="Featured Project" 
                        />
                    </div>                    
                </div>
            </Layout>
        </main>
    </>
  )
}

export default fun