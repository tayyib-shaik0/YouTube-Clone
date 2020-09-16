import React from 'react'
import "./VideoRow.css"

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
    return (
        <div className="videorow">
            <img src={image} alt="" />
            <div className="videorow__text">
                <h3>{title}</h3>
                <p className="videorow__headline">{channel} • <span className="videorow__subsblck"><span className="videorow__subs">{subs}</span> subscribers</span> {views} • {timestamp} </p>
                <p className="videorow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
