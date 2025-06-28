import styles from './Card.module.scss'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { i } from 'motion/react-client'

/* eslint-disable @typescript-eslint/no-explicit-any */
type CardProps = {
  name: string
  role: string
  year?: number | string
  image?: string
  imageDesc?: string
  hoverImage?: string
  content?: any
}

export default function Card({
  name,
  role,
  year,
  image,
  hoverImage,
  imageDesc,
  content
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const imageToDisplay = isHovered && hoverImage ? hoverImage : image

  return (
    <AnimatePresence>
      <div
        className={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.card__main}>
          <img
            src={image}
            alt={imageDesc}
            className={`${styles.card__image} ${styles.card__image__original} ${isHovered ? styles.hidden : ''}`}
          />
          <img
            src={hoverImage}
            alt={imageDesc}
            className={`${styles.card__image} ${styles.card__image__hover} ${isHovered ? styles.visible : ''}`}
          />
       
        </div>

        <div className={styles.card__info}>
          <h3 className={styles.card__info__title}>{name}</h3>
          <p className={styles.card__info__details}>{role} | {year}</p>
         
        </div>

        <div className={styles.card__content}>{content}</div>

        {/* <img src={HomeRgeMockup} alt="Project Mockup" /> */}
        {/* Uncomment the above line to display an image if needed */}
      </div>
    </AnimatePresence>
  )
}
