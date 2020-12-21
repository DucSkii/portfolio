import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  PageLoading: {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    left: '-100%',
    backgroundColor: '#e8ebfc',
    zIndex: '9',
    transition: '1s ease',
  }
})