import React from 'react'


type Props = {}

const ExploreTopProducts = (props: Props) => {
  return (
    <div className=" card flowerHeader">
      <div>
        <img src="/images/flowerHeader.jpg" alt="" />
      </div>
      <div className=" p-5 text-white m-5 card-img-overlay">
        <p className=" card-text">Desabroche seus momentos</p>
        <h1 className=" card-title w-50">A arte da natureza nos seus melhores momentos</h1>
        <p className="card-text">"Cultivado com amor, escolhidas a dedo com muito carinho".</p>
      </div>
    </div>
  )
}

export default ExploreTopProducts