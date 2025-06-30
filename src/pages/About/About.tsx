import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import profilePic from '../../assets/hi.png'
import speechBubble from '../../assets/speech.png'
import styles from './About.module.scss'
import { Link } from 'react-router-dom'


export function About() {
  // Set the document title to "About"
  useEffect(() => {
    document.title = 'Julie Vitse | About'
  }, [])
  const [isVisible, setIsVisible] = useState(false)

  const [randomString, setRandomString] = useState('Hey there!')

  useEffect(() => {
    const interval = setInterval(() => {
      const strings = [
        'Hey there!',
        'Welcome!',
        "That's me!",
        "I'm Julie!",
        'Nice to meet you!',
        "Let's work together!",
      ]
      setRandomString((prev) => {
        const currentIndex = strings.findIndex((s) => s === prev)
        const nextIndex = (currentIndex + 1) % strings.length
        return strings[nextIndex]
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.about}>
      <div className={styles.about__wrapper}>
        <TypeAnimation
          sequence={[
            'A little bit about me...', // Types 'One'
            150, // Waits 1s
            () => {
              console.log('Sequence completed')
              setIsVisible(true)
            },
          ]}
          wrapper="h1"
          cursor={true}
          style={{
            fontFamily: 'Oranienbaum, serif',
          }}
          speed={70}
          className={styles.about__wrapper__title}
        />

        {isVisible ? (
          <>
            <p className={styles.about__wrapper__description}>
              I'm a young front-end developer, currently working mainly with
              React and its ecosystem.{' '}
            </p>
            <p className={styles.about__wrapper__description}>
              With a keen eye for design and a love for crafting user-friendly
              interfaces, I thrive on bringing ideas to life through clean and
              efficient code.{' '}
            </p>
            <p className={styles.about__wrapper__description}>
              My main focus for any project I work on is for the end product to
              be as easy of use, fast, and efficient as possible.
            </p>
            <p className={styles.about__wrapper__description}>
              Browse my{' '}
              <Link className={styles.link} to="/works">
                latest projects
              </Link>{' '}
              and feel free to reach out if you have any questions or if you
              want to work together!{' '}
            </p>
          </>
        ) : (
          <p
            className={`${styles.about__wrapper__description} ${styles.faded}`}
          >
            I'm a young front-end developer, currently working mainly with React
            and its ecosystem. <br />
            With a keen eye for design and a love for crafting user-friendly
            interfaces, I thrive on bringing ideas to life through clean and
            efficient code. <br />
            My main focus for any project I work on is for the end product,
            whether it be a website or application, to be as easy of use, fast,
            and efficient as possible. <br />
            Browse my{' '}
            <Link className={styles.link} to="/works">
              latest projects
            </Link>{' '}
            and feel free to reach out if you have any questions or if you want
            to work together!{' '}
          </p>
        )}
      </div>

      <div className={styles.picWrapper}>
        <img
          src={profilePic}
          alt=""
          className={styles.profilePic}
        />

        <div className={styles.speechBubble}>
          <img src={speechBubble} alt="" className={styles.speechBubble__img} />
          <p className={styles.speechBubble__text}>{randomString}</p>
        </div>
      </div>
    </section>
  )
}
