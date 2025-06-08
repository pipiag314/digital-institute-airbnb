import React from 'react'
import profileUrl from '../../assets/profile.png'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const Card = () => {

    return (
        <div className='card'>
            <img src={profileUrl} alt="" />
            <CardHeader />
            <CardBody />
            <CardFooter />
        </div>
    )
}

export default Card