import React from 'react'

const AirbnbCard = (props) => {
    console.log(props);

    return (
        <div className="card">
            {/* <div className="card--badge">SOLD OUT</div> */}
            <img src={`/public/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="/public/Star.svg" className="card--star" />
                <span>5</span>
                <span className="gray">(6) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default AirbnbCard