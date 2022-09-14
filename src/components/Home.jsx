import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeContext } from '../context/HomeContext'
import Navbar from './Navbar'

const Home = () => {
    const nav = useNavigate()
    const { breed } = useContext(HomeContext);
    console.log("breed new", breed)
    return (
        <>
            <Navbar />
            <div className='containerBreedList'>
                <h1>ALL BREEDS</h1>
                <div className='breedList' >
                    {Object.keys(breed).map((item, i) => {
                        return (
                            <div key={i}>
                                <h3 onClick={() => nav(`/puppy/${item}`)} >{item}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Home