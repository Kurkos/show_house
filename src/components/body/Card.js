import React from 'react'

export default function Card(props) {
    const { title, body} = props.item;
    const {testImg} = props.testImg;

    let cropedDescription = body.length >= 191 ? body.substring(0,190) + "..." : body;
    return (
        <div className="Card">
            <div className="Card-head">
            <img className="Card-head-img" src={require(`../../assets/${testImg}.jpg`)} alt="showHousePicture"/>
            </div>
            <div className="Card-textContent">
                
            <h2 className="Card-textContent-heading">{title}</h2>
            <p className="Card-textContent-description">{cropedDescription}</p>
            </div>
        </div>
    )
}
