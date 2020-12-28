import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  mapContainer: {
    // position: 'fixed',
    top: '0',
    height: '90vh',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      height: '100vh'
    },
  },
  mapButton: {
    borderRadius: '0',
  },
  mapButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '30px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))