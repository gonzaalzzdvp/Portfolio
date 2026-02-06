import Hero from '../components/Hero/Hero'
import AboutMe from '../components/about/AboutMe'
import MyWork from '../components/myWork/MyWork'
import Services from '../components/services/Services'

export default function Home() {
  return (
    <div className='bg-(--colorBlack)'>
      <Hero />
      <AboutMe />
      <MyWork />
      <Services />
    </div>
  )
}
