import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles'
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';

const ServiceCard = (props) => {
  const {title,icon,index} = props;
  return (
    <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right","spring",0.5 * index,0.75)}
    className="w-full green-pink-gradient p-[1px] 
    rounded-[20px] shadow-card"
    >
    <div
    options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
    className='b-tertiary rounded-[20px]
    py-5 px-12 min-h-[280px] flex justify-evenly
    items-center flex-col'
    >
    <img src={icon} alt={title}
    className='w-16 h-16 object-contain'/>

    <h3 className='text-white text-[20px]
    font-bold text-center'>{title}</h3>
    </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <p className={styles.sectionHeadText}>Overview</p>
    </motion.div>

    <motion.p 
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] 
    max-w-3xl leading-[30px]'
    >
    I'm a skilled software developer with experience in 
    building web applications using React, Node.js, and
    Express. I'm also familiar with Python, Java, and C++.
    I'm a quick learner and I'm always looking to learn new
    technologies and frameworks. I'm currently pursuing a
    Bachelor's degree in Aerospace Engineering at the Indian
    Institute of Technology, Kharagpur.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service,index) => (
      <ServiceCard key={service.title} index={index}
      {...service} />
  ))}
    </div>
    </>
  )
}
export default SectionWrapper(About, "about");