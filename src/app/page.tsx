import styles from './styles/styles.module.css'

//components
import Title from "./components/title/title";
import Header from "./components/header/header";
//import Activities from "./components/Activities/Activites";
import Aboutme from "./components/aboutme/aboutme";
import Concept from "./components/concept/concept"
import Fotter from "./components/footer/footer";
import { timelineData } from "@/app/data/activities"
import { Timeline } from "@/app/Activites/components/timeline"
import { DesignSlider } from "./components/design/design"

import ProjectShowcase from './components/Products/ProjectShowcase';

export default function Home() {

    return (
    <>
    <Header/>
    <Title/>
    <div className="flex flex-col justify-center items-center">
      <div id="products" className={styles.contentTitle}>Cording Products</div>
      <ProjectShowcase/>
      <div id="products" className={styles.contentTitle}>Only Designs</div>
      <DesignSlider/>
    
    <div id="about-me" className={styles.contentTitle}>About me</div>
      <Aboutme/>
    <div id="about-me" className={styles.contentTitle}>Activites</div>
      <Timeline data={timelineData} />

    <div id="concept" className={styles.contentTitle}>Concept</div>
      <Concept/>

    </div>
    <Fotter/>

    
    </>
        
      )
    }