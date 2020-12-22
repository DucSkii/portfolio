import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  duckAnimation: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '-11',
    userSelect: 'none',
    opacity: '0',
    transition: 'opacity 0.8s ease',
  }
})