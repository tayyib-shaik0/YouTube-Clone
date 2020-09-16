import "./Searchpage.css"
import React from 'react'
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"

function Searchpage() {
    return (
        <div className="searchpage">
            <div className="searchpage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
                image="https://scontent.fhyd6-1.fna.fbcdn.net/v/t1.0-9/85232245_2658464387600877_199489316659920896_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=7tdL95PHygoAX8GXKUO&_nc_ht=scontent.fhyd6-1.fna&oh=ec273399bd8ce41e89d570b7d1c62df1&oe=5F623129"
                channel="Tayyib Shaik"
                verified=""
                subs="660k"
                noOfvideos={382}
                description="Check out my page!!"
            />
            <hr />
            {/* <VideoRow
                views="24K views"
                subs="660K"
                description="Do you want a free training?? Check this out"
                timestamp="8 hours ago"
                channel="Clever programming"
                title="🔴 Let's Build a GOOGLE Clone with REACT JS for Beginners!"
                image="https://i.ytimg.com/vi/DAWWf7q8sqM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBwMu2Vj5p3TDdJA_TkZ4ccJ86yRg"
            
            />
            
            <VideoRow
                views="54K views"
                subs="660K"
                description="Do you want a free training?? Check this out"
                timestamp="1 month ago"
                channel="Clever programming"
                title="🔴 How to Build a TODO app with React+Firebase (LIVE)"
                image="https://i.ytimg.com/vi/VqgTr-nd7Cg/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBXm0ARqY7a7V_NYM2CQs1gNaLw3g"
            
            /> */}
        </div>

    )
}

export default Searchpage
