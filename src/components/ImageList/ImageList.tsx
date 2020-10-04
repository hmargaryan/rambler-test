import React, { FC, useState, useEffect, MouseEvent } from 'react'
import unsplash from '../../api/unsplash'
import Image from '../Image/Image'

import styles from './ImageList.module.scss'

const ImageList: FC = () => {
  const [photos, setPhotos] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchPhotos = async () => {
    try {
      const { data } = await unsplash.get('/photos', {
        params: {
          per_page: 9,
          order_by: 'popular'
        }
      })

      setPhotos(data)
      setIsLoaded(true)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  const onListClick = (e: MouseEvent): void => {
    const id = (e.target as HTMLSpanElement).dataset.id
    id && alert(id)
  }

  return (
    isLoaded ? (
      <ol className={styles.cards} onClick={onListClick}>
        {photos.map(({ id, user: { profile_image, username, location }, urls, alt_description, likes, description }) => {
          return (
            <Image
              key={id}
              id={id}
              avatar={profile_image['small']}
              user={username}
              location={location}
              src={urls['small']}
              alt={alt_description}
              likes={likes}
              description={description}
            />
          )
        })}
      </ol>
    ) : <h2>Loading...</h2>
  )
}

export default ImageList
