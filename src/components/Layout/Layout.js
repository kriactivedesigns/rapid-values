import React, { useEffect } from 'react'
import Users from '../Users/Users'
import UserDetail from '../UserDetails/UserDetail'
import { 
    Container, 
    Grid,
    Typography 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getUsers } from '../../redux/userActions'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles( theme => ({
    root: {
        height: '100%'
    },
}))

function Layout() {

    var classes = useStyles()
    const dispath = useDispatch()

    useEffect(() => {
        dispath(getUsers())
    }, [])

    return (
        // Container -> Header -> UserList
        <Container className={classes.root}>
            <Grid container style={{ height: '100%' }} alignContent="center">
                <Grid item xs={12} style={{ marginBottom: 25 }}>
                    <Typography style={{ fontSize: 40, marginBottom: 0 }}>USERS</Typography>
                    <Typography>Select the user to view the details</Typography> 
                </Grid>
                <Router>
                    <Switch>
                        <Route exact path="/" component={(props) => <Users/> }/>
                        <Route exact path="/userdetails/:id" component={UserDetail}/>
                    </Switch>
                </Router>
            </Grid>
        </Container>
    )
}

export default Layout
