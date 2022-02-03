import React from 'react'
import profile_pic from "../img/profile_picture.png"
import "./Info.css"


export default function Info(){
    return(
        <div>
            <img src={profile_pic} />
            <h1 className="name">Laura Smith</h1>
            <h3 className="developer">Frontend Developer</h3>
            <h5>laurasmith.website</h5>

            <div>
                <button>Email</button>
                <button>Linkedin</button>
            </div>

            
        </div>
    )
}