import React from 'react'
import Carousel from '../Carousel/Carousel'

type Props = {}

const Section = (props: Props) => {
  return (
    <section className='sec'>
        <div className='d-flex flex-wrap justify-content-center'>
            <h1 className='text-white' style={{marginTop:'1em'}}>My Flowers em destaque</h1>
            <p style={{width: '100%', textAlign:'center', color: '#E7B3B3'}}>O desabrochar perfeito para momentos únicos: explore nossas categorias e encontre o presente perfeito para a ocasião certa!</p>
        </div>        
        <Carousel></Carousel>
    </section>
  )
}

export default Section