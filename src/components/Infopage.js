import React, { useEffect } from 'react'
import './Infopage.css'
export default function Infopage({detail,reset}) {
    console.log(detail)
    return (
        <>
            <div className="wrapper">
                <div className="container">

                    <div className="profile-data">
                        <div className="profile-img-wrapper">
                            <img className="profile-img" src={detail.profilepic} alt=""/>
                        </div>
                        <div className="profile-name-wrapper">
                            <h2 className="big-label">{detail.username? detail.username : "user_not_found"}</h2>
                        </div>
                        <div className="profile-details">
                            <div className="profile-detail-wrapper">
                                <h2 className="head-up">Name</h2>
                                <h2 className="detail-info" >{detail.name ? detail.name: " "}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="profile-stats">
                        <div className="top">
                            <div className="profile-stat-wrapper">
                                <h2 className="head-up">UID</h2>
                                <h2 className="detail-info" >{detail.userid ? detail.userid : " "}</h2>
                            </div>
                            <div className="profile-stat-wrapper">
                                <h2 className="head-up">following</h2>
                                <h2 className="detail-info" >{detail.follow ? detail.follow : 0}</h2>
                            </div>
                            <div className="profile-stat-wrapper">
                                <h2 className="head-up">followers</h2>
                                <h2 className="detail-info" >{detail.followers ? detail.followers : 0}</h2>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="profile-stat-wrapper">
                                <h2 className="head-up">public repos</h2>
                                <h2 className="detail-info" >{detail.public_reops ? detail.public_reops : 0}</h2>
                            </div>
                            <div className="profile-stat-wrapper">
                                <h2 className="head-up" >location</h2>
                                <h2 className="detail-info" >{detail.location ? detail.location : " "}</h2>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-large" onClick={reset} >Check Another Profile ?</button>
                    
                </div>
            </div>
        </>
    )
}
