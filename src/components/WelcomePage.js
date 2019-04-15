import React from 'react';
// import { NavLink } from 'react-router-dom';
import video from "../assets/videos/video.mp4";
import shape from "../assets/images/shape.jpg"
import envision from "../assets/images/envision2.jpg"
import inspire from "../assets/images/inspire.jpg"
import change from "../assets/images/change.jpg"

function WelcomePage(props) {
    return (
        <main>
            <div className="position-relative bucket homepage-intro text-center">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <article>
                        <h2 className="brand-name">Habitz</h2>
                        <h4 className="moto">Your tool to track daily goals towards cultivating good habits and breaking bad habits</h4>
                        {/* <NavLink to="/sign_up" className="btn btn-success font-weight-bold mr-3">Sign Up</NavLink>
                        <NavLink to="/sign_in" className="btn btn-success mx-2 font-weight-bold">Sign In</NavLink> */}
                    </article>
                    <video className="video-background" autoPlay="autoplay" loop="loop" muted="muted" playsInline={true}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="bucket banner container-fluid">
                <div className="row">
                    <div className="container col-4">
                        <div><img src={shape} alt="Shape up your habits" className="homepage-icons" /></div>
                        <div className="mt-4 homepage-keyword">Shape Up</div>
                        <p>your habits</p>
                    </div>
                    <div className="container col-4">
                        <div><img src={envision} alt="Envision the progress" className= "homepage-icons" /></div>
                        <div className="mt-4 homepage-keyword">Envision</div>
                        <p>the progress</p>
                    </div>
                    <div className="container col-4">
                        <div><img src={inspire} alt="Inspire one another" className="homepage-icons" /></div>
                        <div className="mt-4 homepage-keyword" >Inspire</div>
                        <p>one another</p>
                    </div>
                </div>
            </div>

            <div className="bucket banner container-fluid">
                <div className="row">
                    <div className="container col-6 mt-4">
                        <div className="container"><img src={change} alt="Habits make us" className="change-image" /></div>
                    </div>
                    <div className="container col-6 change-text">
                            <q>We first make our habits, then our habits make us.</q>
                            <p></p>
                            <p><i><small>John Dryden</small></i></p>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default WelcomePage