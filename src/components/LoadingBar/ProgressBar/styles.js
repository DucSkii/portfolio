import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  ProgressBar: {
    width: '0',
    height: '10px',
    backgroundColor: '#8d9cf4',
    borderRadius: '20px',
    zIndex: '1',
    transition: '1s ease',
    userSelect: 'none',
  },
})