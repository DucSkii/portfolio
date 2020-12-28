import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  input: {
    width: '100%',
    padding: '0px 6px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    height: '30px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
      height: '45px',
      fontSize: '16px',
    },
  },
  inputMessage: {
    width: '100%',
    padding: '10px',
    borderColor: 'transparent',
    outline: 'none',
    fontFamily: 'Roboto',
    fontSize: '12px',
    height: '50px',
    [theme.breakpoints.up('md')]: {
      height: '120px',
      fontSize: '16px',
    },
  },
}))