import React from 'react'
import facebookUrl from '../../assets/icons/Facebook Icon.svg'
import githubUrl from '../../assets/icons/GitHub Icon.svg'
import instagramUrl from '../../assets/icons/Instagram Icon.png'
import twitterUrl from '../../assets/icons/Twitter Icon.svg'

const CardFooter = () => {
    return (
        <div className="card-footer">
            <img src={twitterUrl} alt="" />
            <img src={facebookUrl} alt="" />
            <img src={instagramUrl} alt="" />
            <img src={githubUrl} alt="" />
        </div>
    )
}

export default CardFooter