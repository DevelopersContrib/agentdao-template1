"use client";
import React, {useEffect} from "react";
import { motion } from "framer-motion";


const AntsAnimation = () => {
    return (
        <>
            <div className="ant" style={{ top: '10%' }}></div>
            <div className="ant" style={{ top: '30%' }}></div>
            <div className="ant" style={{ top: '50%' }}></div>
            <div className="ant" style={{ top: '70%' }}></div>
            <div className="ant" style={{ top: '90%' }}></div>
        </>
    );
};

export default AntsAnimation;
