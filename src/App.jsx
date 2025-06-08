import React from 'react'
import Card from './components/card/Card'
import Navbar from './components/airbnb/Navbar'
import Hero from './components/airbnb/Hero'
// import data from './data'
import AirbnbCard from './components/airbnb/AirbnbCard'

const App = () => {
  // stats = {
  //   rating = 5.0,
  //   reviewCount = 6
  // }


  return (
    // <div className='center'>
    //   <Card />
    // </div>
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        <AirbnbCard
          title="Life Lessons with Katie Zaferes"
          price={100}
          coverImg="katie-zaferes.svg"
          location="Online"
          openSpots={0}
        />

        <AirbnbCard
          title="Learn Wedding Photography"
          price={125}
          coverImg="wedding-photography.svg"
          location="Online"
          openSpots={27}
        />
        
      </section>
    </div >
  )
}

export default App