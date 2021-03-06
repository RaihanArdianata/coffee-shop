import Header from '../components/Navigation/Header.components'
import HomeSection from '../components/Sections/Home.sections'
import styles from '../styles/Home.module.css'
import "@fontsource/darker-grotesque"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className='md:py-48'>
        <HomeSection/>
      </div>
    </div>
  )
}
