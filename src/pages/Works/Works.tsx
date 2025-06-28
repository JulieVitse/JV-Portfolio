/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
//import { getProject } from "../../services/api"
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Card from '../../components/Card/Card'
// Importing the HomeRGE mockup image
import HomeRgeMockup from '../../assets/HomeRGE.png'
import QuizKMockup from '../../assets/quizk.png'
import QuizKMockup2 from '../../assets/quizk2.png'
import styles from './Works.module.scss'

export default function Works() {
  const [project, setProject] = useState([])
  const [isHovered, setIsHovered] = useState(false)
  /* useEffect(() => {
    const fetchData = async () => {
      const data = await getProject()
      console.log(data)
      setProject(data)
    }
    fetchData()
  }
  ,[]) */

  return (
    <div className={styles.works}>
      <h1>Works</h1>

      <h2>Here are some of my projects</h2>
      <h3>Click on a project to see more details</h3>

      {/* Uncomment the following line to display the HomeRGE mockup image */}
      {/* <img src={HomeRgeMockup} alt="Home RGE Mockup" className={styles.mockup} /> */}

      {/* Example of using the Card component */}
      <div className={styles.works__container}>
        <Card
          name="QuizK"
          role="Dev Full Stack"
          year="2024"
          image={QuizKMockup}
          hoverImage={QuizKMockup2}
          imageDesc="Mockup of the QuizK Application"
          content={
            'This is a project description that can be very long and detailed, explaining the project in depth.'
          }
        />
        <Card
          name="QuizK"
          role="Dev Full Stack"
          year="2024"
          image={QuizKMockup}
          imageDesc="Mockup of the QuizK Application"
        />
      </div>

      {/* Example of using the ProjectCard component */}
      <div className={styles.works__head}>
        <p>Project</p>
        <p>Role</p>
        <p>Year</p>
      </div>
      <ProjectCard
        name="QuizK"
        role="Dev Full Stack"
        year="2024"
        isHovered={isHovered}
        content={
          'This is a project description that can be very long and detailed, explaining the project in depth.'
        }
      />
      <ProjectCard
        name="Training Projects"
        role="Various"
        year="2023-2024"
        isHovered={isHovered}
        content={
          'A collection of various projects that I have worked on during the course of my training at OpenClassrooms. These projects cover a wide range of topics and technologies, showcasing my skills and growth as a developer.'
        }
      />
      <ProjectCard
        name="SBS/Project Noise"
        role="Dev Front-End"
        year="2022"
        isHovered={isHovered}
        content={
          'This is another project description that can also be very long and detailed, explaining the project in depth.'
        }
      />

      <ProjectCard
        name="Home RGE"
        role="UI/UX - Dev Front-End"
        year="2021"
        content={'test content 2'}
        isHovered={isHovered}
      />
      <ProjectCard
        name="AllHanSounds"
        role="UI/UX - Dev Front-End"
        year="2020-2021"
        isHovered={isHovered}
        content={
          'This is a project description that can be very long and detailed, explaining the project in depth.'
        }
      />
    </div>
  )
}
