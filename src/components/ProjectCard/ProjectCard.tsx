import styles from './ProjectCard.module.scss'
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react'

/* eslint-disable @typescript-eslint/no-explicit-any */
type ProjectCardProps = {
  name: string
  role: string,
  year?: string,
  isHovered?: boolean,
  content?: any,
}

export default function ProjectCard({ name, role, year, isHovered, content }: ProjectCardProps) {
  const [hovered, setHovered] = useState(isHovered || false);
  return (
    <AnimatePresence>
      <div
        className={styles.projectCard}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.projectCard__main}>
          <p>{name}</p>
          <p>{role}</p>
          
          <p>{year}</p>
        </div>

        {/* <img src={HomeRgeMockup} alt="Project Mockup" /> */}
        {/* Uncomment the above line to display an image if needed */}
        {hovered && (
          <motion.div
            className={styles.projectCard__content}
            initial={{ opacity: 0, transform: 'translateY(-20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            exit={{ opacity: 0, transform: 'translateY(-20px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {content}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}
