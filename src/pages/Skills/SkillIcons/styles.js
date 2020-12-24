import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  skillIconsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
    width: '90px',
    transition: '0.8s ease',
  },
  SkillIcons: {
    backgroundColor: '#ffffff',
    width: '60px',
    height: '60px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})