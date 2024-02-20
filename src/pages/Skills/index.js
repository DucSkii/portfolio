import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'
import materialLogo from '../../images/materialLogo.png'
import { Link } from 'react-router-dom'

import javascriptIMG from '../../images/javascript.webp'
import cssIMG from '../../images/css.png'
import html5IMG from '../../images/html5.png'
import reactIMG from '../../images/react.jpg'
import reduxIMG from '../../images/redux.png'
import typescriptIMG from '../../images/typescript.png'
import gitIMG from '../../images/git.png'
import reactnativeIMG from '../../images/react-native.png'
import sassIMG from '../../images/sass.svg'
import nodejsIMG from '../../images/node-js.svg'
import firebaseIMG from '../../images/firebase.png'
import jestIMG from '../../images/jest.png'
import storybookIMG from '../../images/storybook.png'
import wordpressIMG from '../../images/wordpress.png'

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
      icon: javascriptIMG,
      title: 'JavaScript',
    },
    {
      icon: html5IMG,
      title: 'HTML5',
    },
    {
      icon: cssIMG,
      title: 'CSS3',
    },
    {
      icon: reactIMG,
      title: 'React',
    },
    {
      icon: reduxIMG,
      title: 'Redux',
    },
    {
      icon: typescriptIMG,
      title: 'TypeScript',
    },
    {
      icon: gitIMG,
      title: 'Git'
    },
    {
      icon: reactnativeIMG,
      title: 'React Native',
    },
    {
      icon: sassIMG,
      title: 'SASS',
    },
    {
      icon: materialLogo,
      title: 'Material-UI',
    },
    {
      icon: nodejsIMG,
      title: 'NodeJS',
    },
    {
      icon: firebaseIMG,
      title: 'Firebase',
    },
    {
      icon: jestIMG,
      title: 'Jest',
    },
    {
      icon: storybookIMG,
      title: 'Storybook',
    },
    {
      icon: wordpressIMG,
      title: 'WordPress'
    }
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
                Visit my <a href='https://www.linkedin.com/in/ducviet-dao-898457202/' target="_blank" rel="noopener noreferrer" style={{ color: '#707cc3', fontWeight: 'bold' }}>LinkedIn</a> / <a href='https://github.com/DucSkii' target="_blank" rel="noopener noreferrer" style={{ color: '#707cc3', fontWeight: 'bold' }}>GitHub</a> profile for more details or just <Link to='/contact' style={{ color: '#707cc3', fontWeight: 'bold' }}>contact</Link> me.
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.gap} />
            <Grid container item xs={12} className={classes.skillsContainer}>
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