import { useParams } from 'react-router-dom'
import styles from './WorkDetail.module.scss'

import quizkMockup from '../../assets/quizk.png'
import sportseeMockup from '../../assets/sportsee.png'
import projectNoiseMockup from '../../assets/projectNoise.png'
import portfolioMockup from '../../assets/jvportfolio.png'
import homergeMockup from '../../assets/homerge1.png'
import ahsMockup from '../../assets/ahs.png'


import sportseeSS from '../../assets/ss_sportsee.png'
import modalSS from '../../assets/ss_modal.png'
import kasaSS from '../../assets/ss_kasa.png'
import ohmyfoodSS from '../../assets/ss_ohmyfood.png'

import homergePresentation from '../../assets/HomeRGE_Pres.pdf'
import ahsPdf from '../../assets/DOSSIER_AHS.pdf'

import { Link } from 'react-router-dom'




const githubLink = 'https://github.com/JulieVitse?tab=repositories'

const projects = [
  {
    id: 0,
    title: 'QuizK',
    year: '2024',
    role: 'Full Stack',
    image: quizkMockup,
    link: 'quizk.app',
    github: [
      { label: 'Front-End', url: 'https://github.com/JulieVitse/kpop-quiz' },
      { label: 'Back-End', url: 'https://github.com/JulieVitse/QuizK-Backend' },
    ],
    status: 'online',
    description:
      'A personal project that I developed to practice my skills in full-stack development. I allied my passion for K-Pop and Korean music with my coding skills to create a fun and interactive quiz application for myself and K-Pop fans all over the world.\n\nQuizK allows users to test their knowledge of K-Pop through custom quizzes, all personally created either by myself or by other users that have submitted their own quizzes and questions via a form on the website. The application is built with a focus on user experience, featuring a clean design, smooth navigation, and interactive elements - such as the ability to toggle possible answers - that make the quiz-taking process enjoyable. Users can keep track of their current and best scores in each different quiz, sort and play through different quiz categories and even submit their own to be added to the website.',
    tech: 'React, TypeScript, SCSS Modules, Axios, Node.js, Express, MongoDB',
  },
  {
    id: 1,
    title: 'Training Projects',
    year: '2023-2024',
    role: 'Various',
    image: sportseeMockup,
    works: [
      {
        title: 'SportSee',
        image: sportseeSS,
        github: 'https://github.com/JulieVitse/OC-SportSee-FrontEnd',
        description:
          'An analytics dashboard application that displays various statistics and data visualizations related to sports activities. Developed with React, using an API to fetch data via Axios, and different libraries for data visualization such as Recharts.',
      },
      {
        title: 'Kasa',
        image: kasaSS,
        github: 'https://github.com/JulieVitse/P11---Kasa',
        description:
          'The goal of this project was to develop a web application for a fictional agency, using React and React Router, based on the provided design and using data from a JSON file. One of the key features of this project was also the implementation of an image carousel component, integrated without using external libraries.',
      },
      {
        title: 'Ohmyfood',
        image: ohmyfoodSS,
        github: 'https://github.com/JulieVitse/OC-ohmyfood',
        description:
          'Homepage & menu page for a fictional restaurant. An early project focused on HTML/CSS/SASS integration, with a focus on mobile-first development and responsive design, as well as a secondary focus on smooth animations and transitions.',
      },
      {
        title: 'React Modal',
        image: modalSS,
        github: 'https://github.com/JulieVitse/React-TS-Modal',
        description:
          'An exercise focused on turning a jQuery plugin into a React component library. Built upon an existing jQuery modal plugin, all the features were converted to React, while adding new ones to create a more complete and user-friendly modal component. The project was developed using TypeScript, React, and SCSS, then uploaded to npm for easy installation and use in other projects.',
      },
    ],
    description:
      'A collection of various projects that I have worked on during the course of my training at OpenClassrooms, as part of the training course I followed for a bit more than a year, as a JavaScript/React developer. These projects cover a wide range of topics and technologies, showcasing my skills and growth as a developer.\n\nRanging from simple HTML/CSS integration, to JavaScript interactions and algorithms, to more complex React applications, using APIs, state management, and a lot more. \n\nI worked on approximately 10-12 projects during this course, listed below are a select few of them that showcase the skills I have learned and my growth and evolution as a developer during this time.',
    extra: 'See these projects and more on my GitHub profile.',
    tech: 'Depending on the project, see individual github links for more details.',
  },
  {
    id: 2,
    title: 'Project Noise',
    year: '2022',
    role: 'Front-End',
    image: projectNoiseMockup,
    link: 'project-noise.netlify.app',
    status: 'demo',
    description:
      'A portfolio website for a freelance sound engineer, showcasing their work, the services they offer, and allows users to listen to samples of their sound design and music production work.\n\nFormerly named SBS, this project was created in collaboration with a UI/UX designer, who provided the design and user experience guidelines. The client, a freelance sound engineer, wanted a personal website to showcase their work and projects to potential clients.\n\n While my main role was to develop the front-end of the website, I also contributed to the research and market/competitor analysis beforehand, as well as the website design - mainly for the mobile version, but also for some elements of the overall website design.\n\n The actual website is not online anymore, but a live demo is still available on Netlify - with its content replaced by placeholder content - accessible via the link above.',
    tech: 'HTML, CSS, JavaScript, Figma, Netlify',
  },
  {
    id: 3,
    title: 'Julie Vitse',
    year: '2021',
    role: 'UI Design & Front-End',
    image: portfolioMockup,
    link: 'julie-vitse-portfolio.netlify.app',
    status: 'online',
    description:
      'One of the first iteration of my online portfolio, showcasing my work and skills as a developer and UI Designer. The focus was on creating a clean and personal design, coupled with smooth and interactive navigation to enhance the user experience.\n\nAfter completing my first training course in Web Design (including UI/UX and front-end development), this project was a personal initiative to showcase my work and growth as a developer and UI Designer. My main goal was creating a clean, visually appealing website that would also reflect my personal aesthetic and personality, using colors, textures and elements that I felt represented me, while also being pleasing and attractive to the eye for visitors. One of my main focus was on smooth animations and transitions, as well as interactive elements to enhance the user experience: visually pleasing and clear user feedback being something I value a lot in my work.\n\nAlthough now outdated, this portfolio was a great way to showcase my work and skills at the time, and served as a foundation for my current portfolio website. As such it is still available online, being hosted freely on Netlify.',
    tech: 'HTML, CSS, JavaScript, Netlify',
  },
  {
    id: 4,
    title: 'HomeRGE',
    year: '2021',
    role: 'UI Design & Front-End',
    image: homergeMockup,
    link: 'homerge.fr',
    status: 'online',
    description:
      'HomeRGE was a project realized for an internship at a construction/renovation company, where I was tasked with redesigning and developing their website. Being a smaller company, the client did not have a web department, as such their previous website was originally created via a website builder, which limited the design and development possibilities, and lacked important features such as a responsive interface - preventing their clients from viewing the website freely on any device.\n\nThe client gave me carte blanche for the design, as well as the techs used for development, with a few pointers and keywords that would reflect their brand and company values: the main ones being clarity, modernity and environmental consciousness, as well as being just overall aesthetically pleasing and easy to navigate.\n\nThe website was to maintain its one-page format, but with a more coherent and modern design, forgoing the "blocky" design of the previous website (i.e. harsh separations between sections, superfluous elements impeding the user experience), therefore making navigating through it a more pleasing and cohesive experience.\n\nDesign wise, I focused on a few colors and styles: I chose to go with mainly a lot of white and off-white, with a few touches of green for the environmental aspect, and played around with effects like transparency, blur and shadows to create a more modern and visually appealing design. I also chose to use rounded corners and soft edges for different elements, to avoid any sort of harshness in the design and give it a more soft and smooth look and feel.\n\nEach section of the website is clearly defined, and I also used a variety of pictures and illustrations corresponding to the different sections, making the website more appealing and feel more friendly and engaging to the user, while remaining professional and clear.\n\nThe website was then developed with a few main focus points: enjoyable navigation - using smooth animations and transitions while exploring the website, as well as clear user interactions and feedback. The most important though, was the responsive design, ensuring that the website would be fully functional and visually appealing on any device, whether it be a computer, tablet or phone.\n\nThe website is still online to this day, and can be visited via the link above.',
    tech: 'HTML, CSS, JavaScript & jQuery, Figma, Photoshop',
  },
  {
    id: 5,
    title: 'AllHanSounds',
    year: '2020-2021',
    role: 'UI/UX & Front-End',
    image: ahsMockup,
    link: 'all-han-sounds.netlify.app',
    status: 'demo',
    description:
      'AllHanSounds was a project created and developed during the course of my first training in Web Design, where I learned the basics of HTML, CSS and JavaScript, as well as UI/UX design. It was presented as the final project of the course, where I was tasked to design and develop a 5 page website on the subject of my choice, from wireframes to developing and hosting the website, using all the knowledge and skills I had acquired during the course. \n\nI chose to create a website about K-Pop and Korean music, as it is a subject I am passionate about, and I wanted to create a website that would allow users to read the latest news about their favorite artists and watch their latest music videos. The website was designed to be visually appealing, reflecting the aesthetics and trends in the world of K-Pop at the time, while also being more unique compared to other websites on the same subject - often found in blog format with no big focus on visuals and a lot of superfluous content.\n\nI developed the website with a mobile-first approach, an important aspect in all my work. I also put an important emphasis on the user experience, making navigation enjoyable and intuitive, with smooth animations and interactions.',
      tech: 'Photoshop, Adobe XD, HTML, CSS, JavaScript & jQuery, Netlify'
  },
]

export default function WorkDetail(): JSX.Element {
  // Use useParams to get the project title from the URL
  const { projectName } = useParams<{ projectName: string }>()
  // Convert the projectName to a title format (e.g., "home-rge" to "HomeRGE")
  const title = projectName
    ? projectName
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : ''
  // If no title is provided, return a default message
  if (!title) {
    return (
      <section className="work-detail">
        <h1>Project not found</h1>
      </section>
    )
  }
  // Use the title to find the corresponding project in the projects array
  const project = projects.find(
    (proj) => proj.title.toLowerCase() === title.toLowerCase()
  )

  if (project) {
    return (
      <section className={styles.project}>
        <h2 className={styles.project__title}>{project.title}</h2>

        <p className={styles.project__details}>
          {project.role} - {project.year}
        </p>
        {project.image && (
          <img
            className={styles.project__image}
            src={project.image}
            alt={`${project.title} Mockup`}
          />
        )}
        {project.link && (
          <p className={styles.project__link}>
            <a
              href={`https://${project.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.extLink}
            >
              {'> '}
              {project.status == 'demo'
                ? 'Live Demo'
                : 'Visit the Website'}{' '}
              {' <'}
            </a>
          </p>
        )}
        {project.github && (
          <p className={styles.project__github}>
            See the project on GitHub:{' '}
            {project.github.map((repo, index) => (
              <span key={index}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.extLink}
                >
                  {repo.label}
                </a>
                {index < project.github.length - 1 && ', '}
              </span>
            ))}
          </p>
        )}
        <p className={styles.project__description}>{project.description}</p>

        {project.works && project.works.length > 0 && (
          <div className={styles.project__works}>
            {project.works.map((work, index) => (
              <div key={index} className={styles.project__work}>
                <img
                  src={work.image}
                  alt={`${work.title} screenshot`}
                  className={styles.project__work__image}
                />
                <p className={styles.project__work__title}>{work.title}</p>

                <p className={styles.project__work__description}>
                  {work.description}
                </p>
                {work.github && (
                  <p className={styles.project__work__github}>
                    <a
                      href={work.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.extLink}
                    >
                      {'>'} See on GitHub
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
        {project.title == 'Training Projects' && (
          <p
            className={
              styles.project__description + ' ' + styles.project__extra
            }
          >
            See these projects and more on my{' '}
            <a
              href={githubLink}
              className={styles.extLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github profile
            </a>
          </p>
        )}

        {project.title == 'HomeRGE' && (
          <p
            className={
              styles.project__description + ' ' + styles.project__extra
            }
          >
            See a short visual presentation of this project{' '}
            <a
              href={homergePresentation}
              className={styles.extLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              by clicking here (PDF)
            </a>
            .
          </p>
        )}

        {project.title == 'AllHanSounds' && (
          <p
            className={
              styles.project__description + ' ' + styles.project__extra
            }
          >
            For more information about this project{' '}
            <a
              href={ahsPdf}
              className={styles.extLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              see the complete design document here (PDF)
            </a>
            .
          </p>
        )}

        <p className={styles.project__tech}>
          Techs & Tools:
          <span className={styles.project__tech__content}> {project.tech}</span>
        </p>

        <div className={styles.project__navigation}>
          <Link to="/works" className={styles.project__navigation__link}>
            {'< '}Back to Projects
          </Link>

          {(() => {
            if (!project || project.id === undefined) return null
            // Filter only projects with an id
            const projectsWithId = projects.filter(
              (proj) => proj.id !== undefined
            )
            // Sort by id ascending
            const sortedProjects = projectsWithId.sort(
              (a, b) => (a.id as number) - (b.id as number)
            )
            // Find current project's index in the sorted array
            const currentIndex = sortedProjects.findIndex(
              (proj) => proj.id === project.id
            )
            // Get next project by id, wrap around if at the end
            const nextIndex = (currentIndex + 1) % sortedProjects.length
            const nextProject = sortedProjects[nextIndex]
            const nextProjectSlug = nextProject.title
              .toLowerCase()
              .replace(/\s+/g, '-')
            return (
              <Link
                to={`/works/${nextProjectSlug}`}
                className={styles.project__navigation__link}
              >
                Next Project &gt;
              </Link>
            )
          })()}
        </div>
      </section>
    )
  }

  return (
    <section className="work-detail">
      <h1>Not found</h1>
    </section>
  )
}
