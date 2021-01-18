const initialState = {
    users: null,
    error: null,
    selectedUserDetails: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {

        case "GET_USERS_SUCCESS": {
            return {
                ...state,
                error: null,
                users: action.payload
            }
        }

        case "GET_USERS_FAILED": {
            return {
                ...state,
                error: action.payload,
                users: null
            }
        }

        case "GET_USER_DETAIL_SUCCESS": {
            return {
                ...state,
                error: null,
                selectedUserDetails: action.payload
            }
        }

        default: {
            return state
        }
    }
}

export default userReducer