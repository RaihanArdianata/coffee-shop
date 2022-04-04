import React from 'react'
import Header from '../components/Navigation/Header.components'
import Private from '../components/Sections/Private.section'
import styles from '../styles/Home.module.css'

function GetHere() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className='md:py-48 flex justify-center'>
          <Private/>
      </div>
    </div>
  )
}

export default GetHere