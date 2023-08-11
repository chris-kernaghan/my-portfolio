import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                        type="React - The Complete Guide 2023 (incl. React Router & Redux)" time="August 2023-Present" place="Udemy: Academind" info="Learn React from the ground up by building demo apps and fullstack app build with NextJS. Learning about React hooks and components as well as managing complex state efficiently with Context API ans React Redux. Also learning about routing and route related data fetching with React Router and implementing user authentication. Finally this also covers some React unit testing"
                    />
                    <Details
                        type="JavaScript Web Projects" time="May 2023-July 2023" place="Udemy: Zero To Mastery Online Course" info="Contained projects with HTML5, CSS3, pure Javascript that taught me UI/UX practices to build responsive and mobile first web applications. Asynchronous programming with AJAX, Fetch API, Promises & Async + Await. Worked with Web APIs including localStorage and DOM."
                    />
                    <Details
                        type="Post Graduate Certificate in Further Education (PGCFE)" time="2018-2019" place="Ulster University" info=" Gained knowledge on how to successfully communication with diverse groups of individuals, carried out effective planning and preparation, taught most effective way of marking and assessing problems. Carrid out successful time management of tasks to meet deadlines"
                    />
                    <Details
                        type="Level 5 Professional Software Development" time="2014-2015" place="Belfast Metropolitian College" info="•	Introduction to programming  • Systems Analysis and Design • Object Oriented Programming • Systems Architecture • Software Testing•	Event Driven Programming"
                    />
                    <Details
                        type="Bachelor of Science Animal Behaviour & Welfare" time="2011-2014" place="University of Plymouth" info=""
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education