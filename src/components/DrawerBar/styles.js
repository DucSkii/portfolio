import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  drawerContainer: {
    height: '100vh',
    width: '170px',
    backgroundColor: '#f3f5fd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: '5',
    overflow: 'hidden',
  },
  socials: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonSocials: {
    maxWidth: '60px',
    minWidth: '60px',
    height: '30px',
    padding: '0',
    margin: '0',
  },
  discordIcon: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s',
  },
  opacityNone: {
    opacity: 0,
  },
  opacityShow: {
    opacity: 1,
  },
}))