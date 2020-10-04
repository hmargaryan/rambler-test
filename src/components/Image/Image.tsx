import React, { FC } from 'react'

import styles from './Image.module.scss'
import unknown from '../../images/unknown.jpg'

const Image: FC<ImagePropsType> = ({ id, avatar, user, location, src, alt, likes, description }) => {
  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <img className={styles.avatar} src={avatar || unknown} alt={`${user} avatar`} width="40" height="40" />
        <div className={styles.nameAndLocation}>
          <span>{user}</span>
          {location && <span className={styles.location}>{location}</span>}
        </div>
        <span className={styles.date}>1h</span>
      </div>
      <img className={styles.image} src={src} alt={alt} width="300" height="400" />
      <div className={styles.content}>
        <div className={styles.likes}>
          <span className={styles.heart} data-id={id}>&#9825;</span>
          {likes.toLocaleString().replace(new RegExp(',', 'g'), ' ')}
        </div>
        <p className={styles.description}>{description || alt}</p>
      </div>
    </li>
  )
}

export default Image

interface ImagePropsType {
  id: string
  avatar: string | null | undefined
  user: string
  location: string | null
  src: string
  alt: string
  likes: number
  description: string | null
}