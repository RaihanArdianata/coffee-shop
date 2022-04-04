import React from 'react'
import Header from '../components/Navigation/Header.components'
import GetHereSection from '../components/Sections/Get.Here.Section'
import styles from '../styles/Home.module.css'

function GetHere() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className='md:py-48 flex justify-center'>
          <GetHereSection/>
      </div>
    </div>
  )
}

export default GetHere