import Navbar from "../../components/Navbar/Navbar"
import styles from './HomePage.module.css'
import Banner from "../../components/Banner/Banner"
function HomePage() {
  return (
    <div className={styles.homePageWrapper}>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  )
}
export default HomePage