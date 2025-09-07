import { Timeline } from "@/app/Activites/components/timeline"
import { timelineData } from "@/app/data/activities"
import PageHeader from "../productpages/components/Header/pageHeader"
import Fotter from "../components/footer/footer"
import styles from '@/app/styles/styles.module.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader />
        <div className="container mx-auto py-12">
          <div className="text-center mb-12">
           <div id="products" className={styles.contentTitle}>My Activites</div>
          </div>
          <Timeline data={timelineData} />
        </div>
        <Fotter />
    </main>
  )
}
