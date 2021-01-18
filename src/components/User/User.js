import React, { Component } from 'react'
import {
    Container,
    Typography,
    Grid
} from '@material-ui/core'
import { Link } from 'react-router-dom'

export class User extends Component {
    render() {
        const { user } = this.props
        return (
            <Grid item>
                <Container style={{ 
                                    border: '1px solid grey', 
                                    borderRadius: 5, 
                                    minWidth: 300, 
                                    padding: '10px 25px',
                                    cursor: 'pointer',
                                }}>
                    <Grid container directio="row">
                        <Grid item>
                            <Typography style={{ fontSize: 20, fontWeight: 500 }}>{user.name}</Typography>
                            <Typography style={{ fontSize: 14, marginTop: '-5px', color: 'grey' }}>{user.company.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Link to={`/userdetails/${user.id}`}>Detail</Link>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        )
    }
}

export default User
