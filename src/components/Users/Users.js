import React, { Component, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import User from '../User/User'
import { connect } from 'react-redux'

const mapStateToProps = store => {
    return {
        users: store.users
    }
}

class Users extends Component {

    render({ users } = this.props ){
        if(users){
            return (
                <Grid item xs={12}>
                    <Grid container spacing={3} justify="flex-start">
                        {
                            users.map(user => { return <User key={user.id} user={user}/> })
                        }
                    </Grid>
                </Grid>
            )
        }else{
            return <div>Loading...</div>
        }
    }
}

export default connect(mapStateToProps)(Users)
