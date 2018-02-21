import axios from "axios";

const goalReducer = (prevState = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "POST_GOAL":
            return {
                loading: false,
                data: [...prevState.data, action.data]
            }
        case "GET_GOAL_START":
            return {
                ...prevState,
                loading: true
            }
        case "GET_GOAL_COMPLETE":
            return {
                loading: false,
                data: action.data
            }
        case "UPDATE_GOAL":
            return {
                loading: false,
                data: prevState.data.map((goal) => {
                    if (goal._id === action.id) {
                        return action.updatedGoal;
                    } else {
                        return goal
                    }
                })
            }
        case "DELETE_GOAL":
            return {
                loading: false,
                data: prevState.data.filter((goal) => {
                    return goal._id !== action.id;
                })
            }
        default:
            return prevState;
    }
}

const goalUrl = `/goal/`;

export const postGoal = (inputs) => {
    return dispatch => {
        axios.post(goalUrl, inputs)
            .then((response) => {
                let { data } = response;
                dispatch({
                    type: "POST_GOAL",
                    data
                })
            })
    }
}

export const getGoal = () => {
    return dispatch => {
        dispatch({
            type: "GET_GOAL_START"
        });
        axios.get(goalUrl)
            .then((response) => {
                let { data } = response;
                dispatch({
                    type: "GET_GOAL_COMPLETE",
                    data
                })
            })
    }
}

export const updateGoal = (updatedGoal, id) => {
    return dispatch => {
        axios.put(goalUrl + id, updatedGoal)
            .then((response) => {
                dispatch({
                    type: "UPDATE_GOAL",
                    updatedGoal: response.data,
                    id
                })
            })
    }
}

export const deleteGoal = (id) => {
    return dispatch => {
        axios.delete(goalUrl + id, id)
            .then((response) => {
                dispatch({
                    type: "DELETE_GOAL",
                    id
                })
            })
    }
}

export default goalReducer;