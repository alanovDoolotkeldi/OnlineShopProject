import React from 'react'
import PhoneRekam from '../PhoneReklam/PhoneRekam'
import ScrollProduct from '../scrollProduct/ScrollProduct'
import ProductByCategory from '../ProductByCategory/ProductByCategory'
import BestProducts from '../BestProducts/BestProducts'

function Home() {
  return (
    <div>
        <PhoneRekam/>
        <ScrollProduct/>
        <ProductByCategory/>
        <BestProducts/>
    </div>
  )
}

export default Home
