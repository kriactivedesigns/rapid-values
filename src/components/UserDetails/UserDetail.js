import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { getUserDetail } from '../../redux/userActions'
import { 
    Grid,
    Typography,
    Box
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    arrow: {
        color: theme.palette.action.active,
        marginTop: 5,
        fontSize: 35,
        '&:hover': {
            color: 'rgb(195 132 236 / 100%)'
        }
    },
    arrowSmall: {
        color: theme.palette.action.active,
        marginLeft: 10,
        marginRight: 10,
    },
    header: {
        marginLeft: 10,
        fontSize: 25,
        fontWeight: 500,
        marginBottom: 10,
        color: 'rgb(195 132 236 / 100%)'
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 500,
        color: 'rgb(195 132 236 / 100%)'
    },
    text: {
        fontSize: 16,
        fontWeight: 300
    },
    detailsContainer: {
        border: `1px solid rgb(195 132 236 / 30%)`,
        borderRadius: 3,
        padding: 20,
        boxShadow: `0 0 10px 5px rgba(0,0,0,0.05)`
    },
    itemContainer: {
        border: `1px solid rgb(195 132 236 / 30%)`,
        boxShadow: `0 0 10px 5px rgba(0,0,0,0.02)`,
        borderRadius: 3,
        padding: '10px 15px',
        margin: '5px 10px'
    }
}))

const mapStateToProps = store => {
    return {
        selectedUser: store.selectedUserDetails,
        users: store.users
    }
}

function UserDetail(props) {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { selectedUser, users } = props

    const classes = useStyles()

    useEffect(() => {
        dispatch(getUserDetail(id))
    }, [users])

    if(selectedUser){
        return (
            <Grid container alignContent="center">
                <Grid item xs={12} style={{ marginBottom: 25 }}>
                    <Grid container alignItems="center">
                        <Grid item xs="auto">
                            <Link to="/">
                                <ArrowBackIosIcon className={classes.arrow}/>
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Grid container direction="row" alignItems="center">
                                <Typography style={{ fontSize: 40, marginBottom: 0, color: 'rgb(195 132 236 / 100%)' }}>{selectedUser.name}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 25 }}>
                    <Grid container className={classes.detailsContainer}>
                        <Grid item xs={12}>
                            <Box className={classes.itemContainer}>
                                <Typography className={classes.subHeader}>Address</Typography>
                                <Typography className={classes.text}>{selectedUser.address.suite}</Typography>
                                <Typography className={classes.text}>{selectedUser.address.street}</Typography>
                                <Typography className={classes.text}>{selectedUser.address.city}</Typography>
                                <Typography className={classes.text}>{selectedUser.address.zipcode}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.itemContainer}>
                                <Typography className={classes.subHeader}>Phone</Typography>
                                <Typography className={classes.text}>{selectedUser.phone}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.itemContainer}>
                                <Typography className={classes.subHeader}>Website</Typography>
                                <Typography className={classes.text}>{selectedUser.website}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.itemContainer}>
                                <Typography className={classes.subHeader}>Company Name</Typography>
                                <Typography className={classes.text}>{selectedUser.company.name}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
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
