import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  Work: {
    width: '100%',
    height: '100vh',
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
  titleHeight: {
    height: '10vh',
    [theme.breakpoints.up('md')]: {
      height: '15vh',
    },
  },
  titleSeparator: {
    height: '0vh',
    [theme.breakpoints.up('sm')]: {
      height: '5vh',
    },
    [theme.breakpoints.up('md')]: {
      height: '10vh',
    },
  },
  techText: {
    fontSize: '12px',
    minWidth: '204px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
    },
  },
  projectCard: {
    marginBottom: '15px',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '0',
    },
  },
  projectNav: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))