import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '60px',
    backgroundColor: '#f3f5fd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  socials: {
    
  },
  buttons: {
    maxWidth: '60px',
    minWidth: '60px',
    height: '60px',
    padding: '0',
    margin: '0',
  },
  buttonSocials: {
    maxWidth: '60px',
    minWidth: '60px',
    height: '30px',
    padding: '0',
    margin: '0',
  }
})