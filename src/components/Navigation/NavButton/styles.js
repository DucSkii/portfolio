import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '60px',
    minWidth: '60px',
    height: '60px',
    padding: '0',
    margin: '0',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    textAlign: 'center',
    letterSpacing: '1px',
    color: '#47b3ed',
    opacity: '0',
    transition: 'opacity 0.3s ease-in',
  },
  textSmall: {
    fontFamily: 'Roboto',
    fontSize: '9px',
    textAlign: 'center',
    letterSpacing: '1px',
    color: '#47b3ed',
    opacity: '0',
    transition: 'opacity 0.3s ease-in',
  },
  buttonExpand: {
    display: 'flex',
    justifyContent: 'flex-start',
    maxWidth: '170px',
    minWidth: '170px',
    height: '60px',
    padding: '0',
    margin: '0',
    transition: '1s ease'
  },
})