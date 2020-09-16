import React from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined"
import "./ChannelRow.css"


function ChannelRow({image, channel, verified, subs, noOfvideos, description}) {
    return (
        <div className="channelrow">
            <Avatar className="channelrow__logo"
            src={image}
            alt={channel} />
            <div className="channelrow__text">
                <h4>{channel} {verified && <VerifiedIcon />}</h4>
                <p>{subs} subscribers • {noOfvideos} videos</p>
                <p>{description}</p>
            </div>
        
        </div>
    )
}

export default ChannelRow
