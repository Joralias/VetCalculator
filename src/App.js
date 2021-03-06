import React, { Component } from 'react'
import MainPage from './Pages/MainPage'
import AboutPage from './Pages/AboutPage'
import SearchPage from './Pages/SearchPage'

export default class App extends Component {
    state = { hash: '' }

    componentDidMount() {
        // Start listening for hash changes
        window.addEventListener('hashchange', this.onHashChange, false)
        // Render the initial page
        this.onHashChange()
    }

    onHashChange = () => {
        // The hash has changed so update the state
        // This will call render and display the new page
        this.setState({ hash: window.location.hash.substr(1) })
    }

    render() {
        switch (this.state.hash) {
        default:
            return <MainPage />
        case '':
            return <SearchPage />
        case 'about':
            return <AboutPage />
        }
    }
}
