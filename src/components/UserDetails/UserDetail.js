import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { getUserDetail } from '../../redux/userActions'

const mapStateToProps = store => {
    return {
        selectedUser: store.selectedUserDetails
    }
}

function UserDetail(props) {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { selectedUser } = props

    useEffect(() => {
        dispatch(getUserDetail(id))
    }, [])

    console.log(selectedUser)
    if(selectedUser){
        return (
            <div>
                {selectedUser.name}
            </div>
        )
    }else{
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default connect(mapStateToProps)(UserDetail)
