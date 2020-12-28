import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
  },
  emailPopup: {
    position: 'fixed',
    top: '5px',
    right: '5px',
    padding: '10px',
    backgroundColor: '#6fac85',
    borderRadius: '5px',
    zIndex: '100',
    userSelect: 'none',
    [theme.breakpoints.up('md')]: {
      left: '160px',
      right: 'auto',
    },
  },
}))