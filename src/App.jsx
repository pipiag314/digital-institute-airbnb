import React from 'react'
import Card from './components/card/Card'
import Navbar from './components/airbnb/Navbar'
import Hero from './components/airbnb/Hero'
// import data from './data'
import AirbnbCard from './components/airbnb/AirbnbCard'
import data from './data'

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
        {data.map(card => {
          return (
            <AirbnbCard
              title={card.title}
              price={card.price}
              coverImg={card.coverImg}
              location={card.location}
              openSpots={card.openSpots}
            />
          )
        })}
      </section>
    </div >
  )
}

export default App