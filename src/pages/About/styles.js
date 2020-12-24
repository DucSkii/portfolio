import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  About: {
    width: '100%',
    height: '100vh',
  },
  titleHeight: {
      height: '10vh',
    [theme.breakpoints.up('md')]: {
      height: '30vh',
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
  aboutMeText: {
    fontFamily: 'Roboto',
    [theme.breakpoints.up('xs')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
  },
  timeline: {
    marginTop: '15px',
    [theme.breakpoints.up('md')]: {
      marginLeft: '15px',
      marginTop: '0',
    },
  },
  timelineExtra: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '15px',
      marginTop: '0',
    },
  },
  modal: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 3),
    maxWidth: '230px',
    [theme.breakpoints.up('md')]: {
      maxWidth: 'none',
    },
  },
  modalImageSmall: {
    objectFit: 'contained',
    height: '80vh',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  modalImageLarge: {
    objectFit: 'contain',
    width: '100%',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}))