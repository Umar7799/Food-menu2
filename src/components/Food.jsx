import React, { useState } from 'react'
import Button from './Button'
import { Foods } from './Data'
import '../App.css'

const Food = () => {

    const [food, setFood] = useState('')
    const [recipe, setRecipe] = useState('')
    const [foodImg, setFoodImg] = useState()

    const getFood = () => {

        for (let i = 0; i <= Foods.length; i++) {
            let dish = Foods[Math.floor(Math.random() * Foods.length)]

            Foods.forEach((food) => {
                if (dish.name === food.name) {
                    let foodObj = Foods.find((obj) => {
                        return obj.name == food.name
                    })
                    setFood(foodObj.name)
                    setRecipe(foodObj.recipe)
                    setFoodImg(foodObj.img)
                }
            });
        }
        console.log(food, recipe, foodImg)
    }

    return (
        <div>
            <div className="container">
                <div className="card">
                    <img src={foodImg} alt="" />
                    <div className="intro">
                        <h1>{food}</h1>
                        <p>{recipe}</p>
                    </div>
                </div>
            </div>

            <Button getFood={getFood} />
        </div>
    )
}

export default Food