import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  About: {
    width: '100%',
    height: '100vh',
    opacity: '0',
    transition: 'opacity 0.8s ease-in-out'
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
}))