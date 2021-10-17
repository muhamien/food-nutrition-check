import React, { useState } from 'react'
import { getNutritionList } from '../../actions/nutritionAction';
import { useAppState } from '../../contexts/appState';

function FormCheckNutrition() {
    const [food, setFood] = useState("");
    const [state, dispatch] = useAppState()
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({ query: food })
        getNutritionList(dispatch, food)
    }

    return (
        <div>
            <h4>Check your food Nutritions</h4>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <input type="text" name="food" placeholder="Enter food name" value={food} onChange={(e) => { setFood(e.target.value) }} />
                <button type="submit">Check</button>
            </form>
        </div>
    )
}

export default FormCheckNutrition
