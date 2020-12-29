import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  Work: {
    width: '100%',
    height: '100vh',
  },
  letters: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '60px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '80px',
    },
  },
  titleHeight: {
    height: '10vh',
    [theme.breakpoints.up('md')]: {
      height: '15vh',
    },
  },
  titleSeparator: {
    height: '5vh',
    [theme.breakpoints.up('md')]: {
      height: '10vh',
    },
  },
  projectSeparator: {
    height: '5vh',
    [theme.breakpoints.up('md')]: {
      height: '0',
    },
  },
  smallScreenSeparator: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  hideTitle: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  hide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  hideProjectSeparator: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      height: '0',
      display: 'flex',
    },
  },
}))