import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  Contact: {
    width: '100%',
    height: '100vh',
  },
  letters: {
    maxHeight: '80px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '80px',
    },
  },
  title: {
    alignContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: '20px',
    },
  },
  marginLeftWrapper: {
    marginLeft: '30px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px'
    },
  },
  marginLeftContainer: {
    marginRight: '25px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px'
    },
  },
  description: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
    },
  },
  map: {
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  mapButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    height: '30px',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  mapButton: {
    borderRadius: '0',
  },
  mapButtonClose: {
    position: 'fixed',
    top: '0',
    right: '0',
    zIndex: '10',
  },
  contactInfo: {
    height: '80%',
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
  },
  emailPopup: {
    position: 'fixed',
    top: '5px',
    right: '5px',
    opacity: '0',
    transition: 'opacity 1s ease-in',
    padding: '10px',
    backgroundColor: '#707cc3',
    borderRadius: '5px',
  },
}))