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
      fontSize: '45px',
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
}))