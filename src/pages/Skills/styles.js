import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  Skills: {
    width: '100%',
    height: '100vh',
  },
  titleGap: {
    height: '10vh',
    [theme.breakpoints.up('md')]: {
      height: '20vh'
    },
    [theme.breakpoints.up('lg')]: {
      height: '30vh'
    },
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
  skillsText: {
    fontFamily: 'Roboto',
    marginLeft: '13px',
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
  skillIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    userSelect: 'none',
  },
  gap: {
    height: '1vh',
    [theme.breakpoints.up('md')]: {
      height: '5vh'
    },
  },
}))