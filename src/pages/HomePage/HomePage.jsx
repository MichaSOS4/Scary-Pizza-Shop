import Navbar from "../../components/Navbar/Navbar"
import styles from './HomePage.module.css'
import Banner from "../../components/Banner/Banner"
import Slider from "../../components/Slider/Slider"
function HomePage() {
  return (
    <div className={styles.homePageWrapper}>
      <Navbar></Navbar>
      <Banner></Banner>
      <Slider></Slider>
    </div>
  )
}
export default HomePage