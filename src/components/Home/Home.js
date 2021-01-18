import React, { Component } from 'react'
import './style.scss'
import Layout from '../Layout/Layout'
import { Provider } from 'react-redux'
import store from '../../redux/store'

export class Home extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout/>
            </Provider>
        )
    }
}

export default Home
