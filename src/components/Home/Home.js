import React, { Component } from 'react'
import './style.scss'
import Layout from '../Layout/Layout'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import store from '../../redux/store'

const theme = createMuiTheme()

export class Home extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Layout/>
                </Provider>
            </ThemeProvider>
        )
    }
}

export default Home
