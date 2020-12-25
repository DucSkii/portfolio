import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  Contact: {
    width: '100%',
    height: '100vh',
  },
  titleHeight: {
    height: '10vh',
    [theme.breakpoints.up('md')]: {
      height: '15vh',
    },
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