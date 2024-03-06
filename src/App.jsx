
import './App.css'
import NavBar from './assets/Components/NavBar/NavBar'
import Hero from './assets/Components/Hero/Hero'
import heroimg from "./assets/Components/imgs/img1.jpg"
import PopularDestiriations from './assets/Components/PopularDestiriations/PopularDestiriations'
import Container from './assets/Components/Container/Container'
import fisrtimg from "./assets/Components/imgs/img2.jpg"
import secimg from "./assets/Components/imgs/img5.jpg"
import thirdimg from "./assets/Components/imgs/img4.jpg"
import fourimg from "./assets/Components/imgs/img6.jpg"
import Card from './assets/Components/Card/Card'
import ConFlex from './assets/Components/ConFlex/ConFlex'
import Footer from './assets/Components/Footer/Footer'

function App() {
  var arr=[{img:fisrtimg,para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas rem fuga quasi dolorum perferendis eveniet maiores vero harum, hic nobis delectus, beatae officiis facilis! Blanditiis velit beatae amet eaque"},
  {img:secimg,para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas rem fuga quasi dolorum perferendis eveniet maiores vero harum, hic nobis delectus, beatae officiis facilis! Blanditiis velit beatae amet eaque"},
  {img:fourimg,para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas rem fuga quasi dolorum perferendis eveniet maiores vero harum, hic nobis delectus, beatae officiis facilis! Blanditiis velit beatae amet eaque"}
]

  return (
    <>
    <NavBar logo="Tripple" menu={[{title:"Home",icon:"fa-solid fa-briefcase"},{title:"About",icon:"fa-solid fa-circle-info"},{title:"Services",icon:"fa-solid fa-house-user"},{title:"Contact",icon:"fa-solid fa-address-book"}]} btn="Sign up"/>
    <Hero img={heroimg} title="your journey your story" subtitle="Choose your favourite destination" btn="Travel now"/>
    <PopularDestiriations title="Popular Destiriations" para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vero excepturi obcaecat">
      <Container fisrtimg={fisrtimg} secimg={secimg} title="yghj" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas rem fuga quasi dolorum perferendis eveniet maiores vero harum, hic nobis delectus, beatae officiis facilis! Blanditiis velit beatae amet eaque"/>
      <Container fisrtimg={thirdimg} secimg={fourimg} title="yghj" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas rem fuga quasi dolorum perferendis eveniet maiores vero harum, hic nobis delectus, beatae officiis facilis! Blanditiis velit beatae amet eaque" 
      reverse={true}/>
    </PopularDestiriations>
    <ConFlex>
      {arr.map((e,i)=>{
        return <Card img={e.img} para={e.para} key={i}/>
      })
      }
    </ConFlex>
    <Footer title="TRIPPY" para="choose your favourite destination."/>

    </>
  )
}

export default App
