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
                    {/* Album/Artist photo will go here */}
                </div>
                <section className='top-section__container'>
                <div className='top-section__note'>
                    <h1 className="top-joke">Take Note:</h1>
                    <div className="joke">
                        Life's A Joke
                    </div>
                </div>
            </section>
            {/* <section className='top-section__container'>
                <div className='top-section__news'>
                    <h1>News</h1>
                    <div>
                        This is where some news will go
                    </div>
                </div>
            </section> */}
            {/* <section className='bottom-section__container'>
                <div className='bottom-section__news'>
                    <h1>News1</h1>
                </div>
                <div className='bottom-section__news'>
                    <h1>News2</h1>
                </div>
                <div className='bottom-section__news'>
                    <h1>News3</h1>
                </div>
                <div className='bottom-section__news' id='lastInNews'>
                    <h1>News4</h1>
                </div>
            </section> */}
        </>
    );
}
