import React, { Component, useEffect, useState } from 'react'
import { 
    Grid,
    Typography
} from '@material-ui/core'
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
                <Grid container alignContent="center">
                    <Grid item xs={12} style={{ marginBottom: 30 }}>
                        <Typography style={{ fontSize: 40, marginBottom: 0 }}>USERS</Typography>
                        <Typography>Select the user to view the details</Typography> 
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3} justify="flex-start">
                            {
                                users.map(user => { return <User key={user.id} user={user}/> })
                            }
                        </Grid>
                    </Grid>
                </Grid>
            )
        }else{
            return <div>Loading...</div>
        }
    }
}

export default connect(mapStateToProps)(Users)
