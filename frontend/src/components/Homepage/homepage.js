import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './homepage.css';
import "@fontsource/open-sans"


export const HomeIndex = () => {


    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='top-section__photo' style={{ backgroundImage: "url('https://i.ibb.co/jTLyHFH/63823-Clever-Note-RK-01-mockup.jpg')" }}>
                </div>
                <section className='top-section__container'>
                <div className='top-section__note'>
                    <h1 className="top-joke">Take Note:</h1>
                    <div className="joke">
                        Life's A Joke
                    </div>
                </div>
            </section>
        </>
    );
}
