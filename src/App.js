import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contact from './pages/Contact'

import { useStyles } from './styles'
import PageLoad from './components/PageLoad'

const App = () => {

  const classes = useStyles()

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Fredoka One",
        "Roboto",
      ].join(',')
    },
    palette: {
      primary: {
        main: '#8d9cf4',
      },
      secondary: {
        main: '#8dd0f4'
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <PageLoad />
        <Router>
          <Navigation />
          <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/work' component={Work} />
            <Route path='/skills' component={Skills} />
            <Route path='/about' component={About} />
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
