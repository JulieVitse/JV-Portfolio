import styles from './Contact.module.scss'
import { useEffect } from 'react'

export function Contact() {
    // Set the document title to "Contact"
    useEffect(() => {
        document.title = 'Julie Vitse | Contact'
    }, [])
  return (
    <section className={styles.contact}>
      <h2 className={styles.contact__title}>Talk to me!</h2>
      <p className={styles.contact__content}>
        An idea, a project, or just want to nerd out and talk dev, tech, K-Pop,
        or anything else? Feel free to reach out! <br /> <br />
        You can contact me via email at{' '}
        <a
          href="mailto: julievitse91@gmail.com"
          className={styles.contact__link}
          target="_blank"
          rel="noopener noreferrer"
        >
          julievitse91@gmail.com
        </a>
      </p>
      <p className={styles.contact__content}>
        You can also find me on{' '}
        <a
          href="https://github.com/JulieVitse"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact__link}
        >
          Github
        </a>{' '}
        and{' '}
        <a
          href="https://www.linkedin.com/in/julie-vitse-481b75209/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contact__link}
        >
          LinkedIn
        </a>
        .
      </p>
        <p className={styles.contact__content}>
            I look forward to hearing from you!
        </p>
    </section>
  )
}
