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
        height: '80%'
    },
}))

function Layout() {

    var classes = useStyles()
    const dispath = useDispatch()

    useEffect(() => {
        dispath(getUsers())
    }, [])

    return (
        <Container className={classes.root}>
            <Router>
                <Switch>
                    <Route exact path="/" component={(props) => <Users/> }/>
                    <Route exact path="/userdetails/:id" component={UserDetail}/>
                </Switch>
            </Router>
        </Container>
    )
}

export default Layout
