import React from 'react'
import Header from './Header'
import InfoContainer from './InfoContainer'
import BoneBroth from './BoneBroth'
import CustomerReview from './CustomerReview'
import Marque from './Marque'
import HealthFocus from './HealthFocus'
import RecipesCarousel from './RecipesCarousel'
import Testimonial from './Testimonial'
import Footer from './Footer'

export const Body = () => {
  return (
    <div>
         
      <InfoContainer/>
      <BoneBroth/>
      <CustomerReview/>
      <Marque/>
      <HealthFocus/>
      <RecipesCarousel/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Body;