import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  skillIconsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    width: '56px',
    transition: '0.5s ease',
    [theme.breakpoints.up('sm')]: {
      width: '72px',
    },
    [theme.breakpoints.up('md')]: {
      width: '90px',
    },
  },
  SkillIcons: {
    backgroundColor: '#ffffff',
    width: '40px',
    height: '40px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '50px',
      height: '50px',
      borderRadius: '10px',
    },
    [theme.breakpoints.up('md')]: {
      width: '60px',
      height: '60px',
      borderRadius: '15px',
    },
  },
  title: {
    marginTop: '5px',
    fontSize: '10px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    }
  },
}))