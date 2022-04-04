import React from 'react'
import Header from '../components/Navigation/Header.components'
import Catering from '../components/Sections/Catering.section'
import styles from '../styles/Home.module.css'

function GetHere() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className='md:py-48 flex justify-center'>
          <Catering/>
      </div>
    </div>
  )
}

export default GetHere