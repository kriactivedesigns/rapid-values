import React, { Component } from 'react'
import {
    Container,
    Typography,
    Grid
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    arrow: {
        color: theme.palette.action.active,
        marginTop: 5,
        '&:hover': {
            color: 'rgb(195 132 236 / 100%)'
        }
    },
    userItemContainer: {
        border: `1px solid rgb(195 132 236 / 30%)`,
        borderRadius: 3,
        padding: '10px 12px 10px 25px',
        boxShadow: `0 0 10px 5px rgba(0,0,0,0.05)`,
        userSelect: 'none',
        transition: '250ms',
        backfaceVisibility: 'hidden',
        '-webkit-font-smoothing': 'subpixel-antialiased',
        '&:hover': {
            boxShadow: `0 0 10px 5px rgb(195 132 236 / 24%)`
        }
    }
}))

function User (props) {

    const { user } = props
    const classes = useStyles()

    return (
        <Grid item xs={12} md={3}>
            <Container className={classes.userItemContainer}>
                <Grid container directio="row" alignContent="center" alignItems="center">
                    <Grid item xs>
                        <Typography style={{ fontSize: 18, fontWeight: 500 }}>{user.name}</Typography>
                        <Typography style={{ fontSize: 14, marginTop: '-5px', color: 'grey' }}>{user.company.name}</Typography>
                    </Grid>
                    <Grid item xs="auto">
                        <Link to={`/userinfo/${user.id}`}>
                            <ArrowForwardIosIcon className={classes.arrow}/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    )
}

export default User
