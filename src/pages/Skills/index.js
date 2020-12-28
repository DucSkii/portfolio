import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'
import materialLogo from '../../images/materialLogo.png'
import { Link } from 'react-router-dom'

import { useStyles } from './styles'
import SkillIcons from './SkillIcons'

const Skills = () => {

  const classes = useStyles()

  const title = 'Skills & Experience'.split(' ')

  const aboutMeText = [
    'My expertise in web development lay in the front end department (client side of the web).',
    'HTML, CSS(SCSS), JS(React), Material UI, I am able to apply my skill set to create interactive and responsive web designs.',
    'I am always seeking to improve and expand upon my current skill set.'
  ]

  const skills = [
    {
      icon: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png',
      title: 'JavaScript',
    },
    {
      icon: 'https://image.flaticon.com/icons/png/512/1216/1216733.png',
      title: 'HTML5',
    },
    {
      icon: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png',
      title: 'CSS3',
    },
    {
      icon: 'https://icon-library.com/images/react-icon/react-icon-29.jpg',
      title: 'React',
    },
    {
      icon: 'https://bendyworks.com/assets/images/blog/2020-05-04-ionic-react-and-redux-74ed1080.png',
      title: 'Redux',
    },
    {
      icon: 'https://image.flaticon.com/icons/png/512/25/25231.png',
      title: 'Git'
    },
    {
      icon: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
      title: 'SASS',
    },
    {
      icon: materialLogo,
      title: 'Material-UI',
    },
    {
      icon: 'https://img.icons8.com/color/452/firebase.png',
      title: 'Firebase',
    },
  ]

  const renderText = () => {
    return aboutMeText.map((paragraph, index) => {
      if (paragraph === ' ') {
        return (
          <div style={{ height: '25px' }} key={index} />
        )
      }
      return (
        <Typography
          className={classes.skillsText}
          key={index}
        >
          {paragraph}
        </Typography>
      )
    })
  }

  const renderIcons = () => {

    return skills.map(({ icon, title }, index) => {
      return (
        <div className={classes.skillIcons} key={index}>
          <SkillIcons icon={icon} title={title} />
        </div>
      )
    })
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.Skills}
    >
      <Grid container>
        <Grid item xs={12} className={classes.titleGap} />
        <Grid container item xs={12}>
          <Typography
            variant='h2'
            color='primary'
            className={classes.letters}
            style={{
              cursor: 'default',
              userSelect: 'none',
              marginLeft: '7.5%',
            }}
          >
            {title.map((letter, index) => {
              if (index === 0) {
                return (
                  <span className='a' key={index} style={{ marginLeft: '20px' }}>{letter}</span>
                )
              }
              if (index === 2) {
                return (
                  <span className='a' key={index} style={{ marginRight: '60px' }}>{letter}</span>
                )
              } else {
                return (
                  <span className='a' key={index} style={{ margin: '0px 20px' }}>{letter}</span>
                )
              }
            })}
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} />
          <Grid container item xs={10}>
            <Grid item xs={12}>
              {renderText()}
              <Typography
                className={classes.skillsText}
                style={{ marginTop: '20px' }}
              >
                Visit my <a href='https://www.linkedin.com/in/ducviet-dao-898457202/' style={{ color: '#707cc3', fontWeight: 'bold' }}>LinkedIn</a> / <a href='https://github.com/DucSkii' style={{ color: '#707cc3', fontWeight: 'bold' }}>GitHub</a> profile for more details or just <Link to='/contact' style={{ color: '#707cc3', fontWeight: 'bold' }}>contact</Link> me.
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.gap} />
            <Grid container item xs={12}>
              {renderIcons()}
            </Grid>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Skills