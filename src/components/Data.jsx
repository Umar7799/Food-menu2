import React from 'react'
import Food from './Food'

// IMPORT IMAGES
import caribbieanP from '../Food-Images/caribbiean.jpg'
import frenchP from '../Food-Images/french.jpg'
import indianP from '../Food-Images/indian.jpg'
import italyP from '../Food-Images/italy.jpg'
import koreanP from '../Food-Images/korean.jpg'
import polishP from '../Food-Images/polish.jpg'
import uzbekP from '../Food-Images/uzbek.jpg'


export const Foods = [
    { name: 'caribbiean', img: caribbieanP, recipe: 'CARIBBIEAN food is delicious, blablabla' },
    { name: 'french', img: frenchP, recipe: 'FRENCH food is delicious, blablabla' },
    { name: 'indian', img: indianP, recipe: 'INDIAN food is delicious, blablabla' },
    { name: 'italian', img: italyP, recipe: 'ITALIAN food is delicious, blablabla' },
    { name: 'korean', img: koreanP, recipe: 'KOREAN food is delicious, blablabla' },
    { name: 'polish', img: polishP, recipe: 'POLISH food is delicious, blablabla' },
    { name: 'uzbek', img: uzbekP, recipe: 'UZBEK food is delicious, blablabla' }
]

const Data = () => {

    return (
        <div>
            <Food />
        </div>
    )
}

export default Data