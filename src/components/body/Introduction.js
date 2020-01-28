import React from 'react'

export default function Introduction() {
    return (
        <div className="Introduction">
            <h1 className="Introduction-heading">Show House</h1>
            <img className="Introduction-img" src={require('../../assets/house.jpg')} alt="showHousePicture"/>
        </div>
    )
}
