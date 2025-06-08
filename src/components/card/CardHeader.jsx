import React from 'react'
import mailIconUrl from '../../assets/icons/Mail.svg'
import linkedinIconUrl from '../../assets/icons/linkedin.svg'

const CardHeader = () => {
    return (
        <div className="card-header">
            <h3 className='card-heading'>Laura Smith</h3>
            <p className='card-subheading'>Frontend Developer</p>
            <a href="#" className='card-link'>
                laurasmith.website
            </a>

            <div className="card-header-button-container">
                <a href="#" className='card-button-link white'>
                    <img src={mailIconUrl} alt="" />
                    Email
                </a>

                <a href="#" className='card-button-link blue'>
                    <img src={linkedinIconUrl} alt="" />
                    Linkedin
                </a>
            </div>
        </div>
    )
}

export default CardHeader