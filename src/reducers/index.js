// step 6 :
import nutritionReducer from './nutritions'

// step 3 :
const initialState = {
    getNutritionResult: false,
    getNutritionLoading: false,
    getNutritionError: false
}

const combineReducers = reducers => {
    return (state, action) => {
        return Object.keys(reducers).reduce(
            (acc, prop) => {
                return {
                    ...acc,
                    ...reducers[prop]({ [prop]: acc[prop] }, action),
                }
            },
            state
        )
    }
}

const AppReducers = combineReducers({
    // step 7 :
    nutritionReducer,
})

export { initialState, combineReducers, AppReducers };