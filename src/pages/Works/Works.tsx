/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'

import Card from '../../components/Card/Card'

import QuizKMockup from '../../assets/quizk.png'
import QuizKMockup2 from '../../assets/quizk2.png'
import ohMyFoodMockup from '../../assets/ohmyfood.png'
import sportseeMockup from '../../assets/sportsee.png'
import projectNoiseMockup from '../../assets/projectNoise.png'
import projectNoiseMockup2 from '../../assets/projectNoise2.png'
import portfolioMockup from '../../assets/jvportfolio.png'
import portfolioMockup2 from '../../assets/jvportfolio2.png'
import homeRgeMockup from '../../assets/homerge1.png'
import homeRgeMockup2 from '../../assets/homerge2.png'
import ahsMockup from '../../assets/ahs.png'
import ahsMockup2 from '../../assets/ahs2.png'
import styles from './Works.module.scss'

export default function Works() {
  useEffect(() => {
    document.title = 'Julie Vitse | Projects'
  }, [])
  return (
    <div className={styles.works}>
      <h2 className={styles.works__title}>Projects</h2>
      <div className={styles.works__container}>
        <Card
          name="QuizK"
          role="Full Stack"
          year="2024"
          image={QuizKMockup}
          hoverImage={QuizKMockup2}
          imageDesc="Mockup of the QuizK Application"
          content={
            'A fullstack (MERN) application where users can play quizzes on the topic of K-Pop music. Users can play, create quizzes, and keep track of their scores.'
          }
        />
        <Card
          name="Training Projects"
          role="Various"
          year="2023-2024"
          image={ohMyFoodMockup}
          hoverImage={sportseeMockup}
          imageDesc="Mockup of different training projects"
          content={
            'A collection of various projects that I have worked on during the course of my training at OpenClassrooms. These projects cover a wide range of topics and technologies, showcasing my skills and growth as a developer.'
          }
        />
        <Card
          name="Project Noise"
          role="Front-End"
          year="2022"
          image={projectNoiseMockup}
          hoverImage={projectNoiseMockup2}
          imageDesc="Mockup of the Project Noise Application"
          content={
            'A portfolio website for a freelance sound engineer, showcasing their work, the services they offer, and allows users to listen to samples of their sound design and music production work.'
          }
        />
        <Card
          name="Julie Vitse"
          role="UI Design & Front-End"
          year="2021"
          image={portfolioMockup}
          hoverImage={portfolioMockup2}
          imageDesc="Mockup of my first portfolio website"
          content={
            'One of the first iteration of my online portfolio, showcasing my work and skills as a developer and UI Designer. The focus was on creating a clean and personal design, coupled with smooth and interactive navigation to enhance the user experience.'
          }
        />
        <Card
          name="HomeRGE"
          role="UI Design & Front-End"
          year="2021"
          image={homeRgeMockup}
          hoverImage={homeRgeMockup2}
          imageDesc="Mockup of the HomeRGE Application"
          content={
            'A one-page website for a construction/renovation company. Users can find information about the company, the services offered, see examples of past projects, and contact them.'
          }
        />
        <Card
          name="AllHanSounds"
          role="UI/UX & Front-End"
          year="2020-2021"
          image={ahsMockup}
          hoverImage={ahsMockup2}
          imageDesc="Mockup of the AllHanSounds Application"
          content={
            'An exercise in design and front-end integration, a website about K-Pop and Korean music, where users can read the latest news about their favorite artists and watch their latest music videos.'
          }
        />
      </div>
    </div>
  )
}
