import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutBar(props) {
    const {about, aboutSwitch} = props;
    return (
        about ? (<div className="AboutBar">
        <div className="AboutBar-overlay"></div>
        <div className="AboutBar-info">
        <FontAwesomeIcon className="AboutBar-info-icon" icon="times-circle" onClick={aboutSwitch}/>
        <div className="AboutBar-info-text">
            <h2>About Page</h2>
            <p> This single-page application is made for learning purposes. And like in Show House, it's contents isnt real, but only a artificaly made reflection of how "normal" house, or in this case application, would look.</p>
            <hr/>
            <h2>About Me</h2>
            <p>About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me About Me</p>
        </div>
        </div>
        
    </div>) : null
        
    )
}
