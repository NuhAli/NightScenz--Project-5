import React from 'react'
import {Button} from '../Button/Button'
import "./Newsletter.css"

export const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="newsletter-wrapper">
                <form action="#" className="sign-up">
                    <h4>Sign up for my weekly newsletter</h4>
                    <h6>You can cancel at any time</h6>
                    <div className="email-area">
                    <input type="email"
                        name="email" 
                        id="email"
                        placeholder="Enter your email..."
                    />
                    <Button buttonStyle="btn-form" children="Subscribe" />
                    </div>
                </form>
            </div>
        </section>
    )
}
