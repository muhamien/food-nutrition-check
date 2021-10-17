import { GET_NUTRITION_LIST } from '../../actions/nutritionAction'

// step 5:
const nutrition = (state, action) => {
    const { type } = action
    switch (type) {
        case GET_NUTRITION_LIST:

            return {
                ...state,
                getNutritionResult: action.payload.data,
                getNutritionLoading: action.payload.loading,
                getNutritionError: action.payload.errorMessage
            };

        default:
            return state;
    }
}

export default nutrition;