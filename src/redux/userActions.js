import axios from 'axios'
import store from './store'

export const getUsers = () => {
    return function (dispatch){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            dispatch(getUsersSuccess(response.data))
        }).catch(error => {
            dispatch(getUsersFailed("Failed to get users"))
        })
    }
}

export const getUserDetail = (id) => {
    return function (dispatch){
        var users = store.getState().users
        var selectedUser
         users.some(user => {
            if(user.id == id){
                selectedUser = user
                return
            }
        })
        dispatch(getUserDetailSuccess(selectedUser))
    }
}

const getUserDetailSuccess = (data) => {
    return {
        type: "GET_USER_DETAIL_SUCCESS",
        payload: data
    }
}

const getUsersSuccess = (data) => {
    return {
        type: "GET_USERS_SUCCESS",
        payload: data
    }
}

const getUsersFailed = (error) => {
    return {
        type: "GET_USERS_FAILED",
        payload: error
    }
}