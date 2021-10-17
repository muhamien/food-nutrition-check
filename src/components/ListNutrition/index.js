import React, { useEffect } from 'react'
import { getNutritionList } from '../../actions/nutritionAction'
import { useAppState } from '../../contexts/appState'
import './ListNutrition.css'

function ListNutrition() {

    const [state, dispatch] = useAppState()
    const { getNutritionResult, getNutritionLoading, getNutritionError } = state

    useEffect(() => {
        getNutritionList(dispatch)
        // console.log(getNutritionResult)
    }, [dispatch])
    if (getNutritionLoading) {
        return (
            <div>
                <div class="svg-loader">
                    <svg class="svg-container" height="40" width="40" viewBox="0 0 100 100">
                        <circle class="loader-svg bg" cx="50" cy="50" r="45"></circle>
                        <circle class="loader-svg animate" cx="50" cy="50" r="45"></circle>
                    </svg>
                </div>
            </div>
        )
    }
    return (
        <div>
            {getNutritionResult ? (
                getNutritionResult.map((nutrition) => {
                    return (
                        <div>
                            <h5>"{nutrition.name}"</h5>
                            <ul>
                                <li>Calories: <b>{nutrition.calories}</b></li>
                                <li>Serving size: <b>{nutrition.serving_size_g} (g)</b></li>
                                <li>Fat_total: <b>{nutrition.fat_total_g} (g)</b></li>
                                <li>Fat Saturated: <b>{nutrition.fat_saturated_g} (g)</b></li>
                                <li>Protein: <b>{nutrition.protein_g} (g)</b></li>
                                <li>Sodium: <b>{nutrition.sodium_mg} (mg)</b></li>
                                <li>Potassium: <b>{nutrition.potassium_mg} (mg)</b></li>
                                <li>Cholesterol: <b>{nutrition.cholesterol_mg} (mg)</b></li>
                                <li>Carbohydrates total: <b>{nutrition.carbohydrates_total_g} (g)</b></li>
                                <li>Fiber: <b>{nutrition.fiber_g} (g)</b></li>
                                <li>Sugar: <b>{nutrition.sugar_g} (g)</b></li>
                            </ul>
                        </div>
                    )
                })
            ) : (getNutritionError) ? 'Fill up the form, we`ll back with result' : getNutritionError}
        </div>
    )
}

export default ListNutrition
