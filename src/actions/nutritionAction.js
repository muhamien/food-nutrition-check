import axios from "axios";

export const GET_NUTRITION_LIST = "GET_NUTRITION_LIST";

export const getNutritionList = (dispach, data) => {
    // loading
    dispach({
        type: GET_NUTRITION_LIST,
        payload: {
            loading: true,
            data: false,
            errorMessage: false
        }
    })
    // console.log(data)
    axios({
        method: 'GET',
        url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
        params: { query: data },
        headers: {
            'x-rapidapi-host': 'nutrition-by-api-ninjas.p.rapidapi.com',
            'x-rapidapi-key': '0df81450afmshdecb2af98b9980fp11e84djsn16895f9ae3ee'
        },
        timeout: 120000,
    }).then((response) => {
        dispach({
            type: GET_NUTRITION_LIST,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false
            }
        })
    }).catch((error) => {
        dispach({
            type: GET_NUTRITION_LIST,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message
            }
        })
    })
}
