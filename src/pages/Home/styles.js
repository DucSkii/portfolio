import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  Home: {
    width: '100%',
    height: '100vh',
  },
  letters: {
    [theme.breakpoints.up('xs')]: {
      marginTop: '10px',
      fontSize: '30px',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '0',
      fontSize: '50px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '65px'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '80px'
    },
  },
  text: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '25px'
    },
  },
  contactButton: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    }
  },
}))