import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Drawer from '@material-ui/core/Drawer'
import DrawerBar from './components/DrawerBar'
import { useSelector, useDispatch } from 'react-redux'
import { setDrawerFalse } from './redux/ducks/drawer'

import { useStyles } from './styles'
import PageLoad from './components/PageLoad'

const App = () => {

  const classes = useStyles()
  const open = useSelector(state => state.drawer.open)
  const dispatch = useDispatch()

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Fredoka One",
        "Roboto",
      ].join(',')
    },
    palette: {
      primary: {
        main: '#707cc3',
      },
      secondary: {
        main: '#8dd0f4'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 578,
        md: 960,
        lg: 1780,
        xl: 1920,
      }
    }
    // xs, extra-small: 0px
    // sm, small: 600px
    // md, medium: 960px
    // lg, large: 1280px
    // xl, extra-large: 1920px
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <PageLoad />
        <Router>
          <ThemeProvider theme={theme}>
            <Drawer
              open={open}
              anchor='left'
              onClose={() => dispatch(setDrawerFalse())}
            >
              <DrawerBar />
            </Drawer>
          </ThemeProvider>
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
