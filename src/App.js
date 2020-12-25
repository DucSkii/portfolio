import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Switch, Route, useLocation } from 'react-router-dom'
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
import { AnimatePresence } from 'framer-motion'
import DuckAnimation from './components/DuckAnimation'
import duckAnimationWave from './video/duck-animation-wave.gif'

import { useStyles } from './styles'

const App = () => {

  const classes = useStyles()
  const open = useSelector(state => state.drawer.open)
  const dispatch = useDispatch()
  const location = useLocation()

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
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 578,
        md: 960,
        lg: 1780,
        xl: 1920,
      },
    },
    overrides: {
      MuiInput: {
        underline: {
          '&:before': {
            borderBottom: '1px solid #707cc3'
          },
          '&:after': {
            borderBottom: '2px solid #8dd0f4'
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid #707cc3'
          }
        },
      },
    },
    // xs, extra-small: 0px
    // sm, small: 600px
    // md, medium: 960px
    // lg, large: 1280px
    // xl, extra-large: 1920px
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <ThemeProvider theme={theme}>
          <Drawer
            open={open}
            anchor='left'
            onClose={() => dispatch(setDrawerFalse())}
          >
            <DrawerBar />
          </Drawer>
        </ThemeProvider>
        <DuckAnimation />
        <img src={duckAnimationWave} alt='Animated gif'
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '-9',
            userSelect: 'none',
          }}
        />
        <Navigation />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path='/contact' component={Contact} />
            <Route path='/work' component={Work} />
            <Route path='/skills' component={Skills} />
            <Route path='/about' component={About} />
            <Route exact path='/' component={Home} />
          </Switch>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}

export default App
