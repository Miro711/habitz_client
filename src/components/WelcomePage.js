import React from 'react';
import { NavLink } from 'react-router-dom';
import sample from "../assets/videos/video.mp4";
import shape from "../assets/images/shape.jpg"
import envision from "../assets/images/envision2.jpg"
import inspire from "../assets/images/inspire.jpg"

function WelcomePage(props) {
    return (
        <main>
            <div className="position-relative js-object-log landing-page-div-1 text-center">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <article>
                        <h2 className="display-4 font-weight-normal">Habitz</h2>
                        <h4 className="moto">Your mirror to track daily goals for cultivating good habits and breaking bad habits</h4>
                        <NavLink to="/sign_up" className="btn btn-success font-weight-bold mr-3">Sign Up</NavLink>
                        <NavLink to="/sign_in" className="btn btn-success mx-2 font-weight-bold">Sign In</NavLink>
                    </article>
                    <video className="video-background" autoPlay="autoplay" loop="loop" muted="muted" playsInline={true}>
                        <source src={sample} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="js-object-log banner container-fluid">
                <div className="row">
                    <div className="container col-4">
                        <div><img src={shape} alt="" className="landing-page-catchwords" /></div>
                        <div className="mt-4 word">Shape</div>
                        <p>your habit</p>
                    </div>
                    <div className="container col-4">
                        <div><img src={envision} alt="" className= "landing-page-catchwords" /></div>
                        <div className="mt-4 word">Envision</div>
                        <p>the progress</p>
                    </div>
                    <div className="container col-4">
                        <div><img src={inspire} alt="" className="landing-page-catchwords" /></div>
                        <div className="mt-4 word" >Inspire</div>
                        <p>one another</p>
                    </div>
                </div>
            </div>

            <div class="js-object-log banner container-fluid">
                <div class="row">
                    <div class="container col-6 mt-4">
                        <div><img src='worldwide2.jpg' class="worldwide-image" /></div>
                        <div class="mt-4 word"></div>
                    </div>
                    <div class="container col-6 worldwide-text">
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