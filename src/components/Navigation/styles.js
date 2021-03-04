import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    width: '170px',
    backgroundColor: '#f3f5fd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: '5',
    transition: '0.5s ease',
    overflow: 'hidden',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  socials: {
    display: 'flex',
    flexDirection: 'column',
    '&>a:last-child': {
      marginBottom: '30px',
    },
    '&>a': {
      textDecoration: 'none',
    },
  },
  burgerMenuContainer: {
    position: 'absolute',
    zIndex: '100',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  buttonSocials: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '60px',
    minWidth: '60px',
    height: '30px',
    padding: '0',
    margin: '0',
  },
  buttonSocialsExpanded: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxWidth: '170px',
    minWidth: '170px',
    height: '30px',
    padding: '0',
    margin: '0',
  },
  discordIcon: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s',
  },
  discordIconHovered: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  opacityNone: {
    opacity: 0,
  },
  opacityShow: {
    opacity: 1,
  },
}))