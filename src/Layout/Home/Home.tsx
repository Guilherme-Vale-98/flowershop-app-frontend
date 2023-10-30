import React from 'react'
import ExploreTopProducts from '../ExploreTopProducts/ExploreTopProducts'
import Heros from '../Heros/Heros'
import Section from '../Section/Section'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <ExploreTopProducts></ExploreTopProducts>
            <Heros></Heros>
            <Section/>
        </div>
    )
}

export default Home