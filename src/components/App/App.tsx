import React, { FC } from 'react'
import ImageList from '../ImageList/ImageList'

import styles from './App.module.scss'

const App: FC = () => {
  return (
    <main className={styles.main} role="main">
      <h1 className="visually-hidden">Rambler test</h1>
      <ImageList />
    </main>
  )
}

export default App
