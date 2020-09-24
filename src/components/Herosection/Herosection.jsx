import React from 'react'
import { Button } from '../Button/Button'
import "./Herosection.css";
import video from '../../videos/video-1.mp4'
export const Herosection = () => {
    return (
        <div className="hero">
            <video src={video} autoPlay loop muted />
            <h1>Capturing Perfection</h1>
            <p>Specialist Night Photographer</p>
            <div className="hero-btns">

                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    My Work
                </Button>

            </div>
        </div>
    )
}
