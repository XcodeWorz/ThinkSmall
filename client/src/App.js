import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faAddressCard,
    faBars,
    faBolt,
    faList,
    faMapMarkedAlt,
    faMapMarkerAlt,
    faMeteor,
    faPaperPlane,
    faSave,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { StylesProvider, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import SignupForm from './components/Form/SignupForm'
import LoginForm from './components/Form/LoginForm'
import Inbox from './components/Inbox/Inbox'
import BusinessesList from './components/List/BusinessesList'
import VolunteersList from './components/List/VolunteersList'
import NavBar from './components/NavBar/NavBar'
import AccountPage from './pages/AccountPage'
import HomePage from './pages/HomePage'
import './App.css'
import About from './pages/AboutPage'
import Contact from './pages/ContactPage'

library.add(
    fab,
    faAddressCard,
    faBars,
    faBolt,
    faList,
    faMapMarkedAlt,
    faMapMarkerAlt,
    faMeteor,
    faPaperPlane,
    faSave,
    faUser,
)

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Baloo 2',
            'cursive',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#000',
        },
    },
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/business" component={BusinessesList} />
                        <Route path="/volunteer" component={VolunteersList} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/inbox" component={Inbox} />
                        <Route path="/account" component={AccountPage} />
                        <Route path="*" component={HomePage} />
                    </Switch>
                    <SignupForm />
                    <LoginForm />
                </Router>
            </StylesProvider>
        </ThemeProvider>
    )
}

export default App
