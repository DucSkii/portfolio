import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    width: '60px',
    backgroundColor: '#f3f5fd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: '5',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  buttonSocials: {
    maxWidth: '60px',
    minWidth: '60px',
    height: '30px',
    padding: '0',
    margin: '0',
  }
}))