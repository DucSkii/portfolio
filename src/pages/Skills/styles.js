import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  Skills: {
    width: '100%',
    height: '100vh',
  },
  letters: {
    [theme.breakpoints.up('xs')]: {
      minWidth: '335px',
      fontSize: '25px',
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: '630px',
      fontSize: '50px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '70px',
    },
  },
}))