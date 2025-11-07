import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Poliscies from '../components/Poliscies'
import NewsLetterBox from '../components/NewsLetterBox'

const home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller />
      <Poliscies />
      <NewsLetterBox />
    </div>
  )
}

export default home