import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  ProjectCard: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  cover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '0',
    left: '0',
    zIndex: '20',
    cursor: 'pointer'
  },
  filter: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'RGBA(0, 0, 0, 0.5)',
    transition: '0.5s ease',
    zIndex: '30',
  },
  viewButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '80px',
    borderRadius: '50px',
    backgroundColor: '#8dd0f4',
    zIndex: '40',
  },
  modal: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 3),
    [theme.breakpoints.up('md')]: {

    },
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '50%',
    marginTop: '10px',
    [theme.breakpoints.up('md')]: {
      marginLeft: '20px',
      marginTop: '15px',
    },
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: '13px',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  },
  linksText: {
    fontSize: '10px',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  },
  descriptionGap: {
    marginTop: '10px',
    [theme.breakpoints.up('md')]: {
      marginTop: '50px'
    },
  },
}))