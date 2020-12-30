import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'
import ProjectCard from '../../components/ProjectCard'

import { useStyles } from './styles'

const Work = () => {

  const classes = useStyles()

  const title = 'My Projects'.split('')

  const shoppingProject = {
    title: 'eCommerce Site',
    previewImg: 'https://camo.githubusercontent.com/49679fcb3fb80256054f206986b4729a0acda04fd6fff81c3c3dcdff14934504/68747470733a2f2f692e6779617a6f2e636f6d2f34346663393966386365303539346639303234336537353266316234633336352e706e67',
    projectLink: 'https://shopping-cart-project-f7cf3.web.app/',
    githubLink: 'https://github.com/DucSkii/shopping-cart',
    description: 'THIS PROJECT IS NOT RESPONSIVE TO SMALL SCREEN DEVICES. My goal for the eCommerce site was to create a fast single page application that is quick and easy to navigate. Other features I had added were things like filters, option to favourite, scroll to top, pre-selected delivery options.',
    time: '2 weeks',
    tech: 'React',
  }

  const socialMediaProject = {
    title: 'Social Media App',
    previewImg: 'https://camo.githubusercontent.com/0818c31bee813ef3875c3e9ce1bd3bb43fa7300a843debe1c701a9ab618eb084/68747470733a2f2f692e6779617a6f2e636f6d2f32636139316665656235626433373939336262376164303335363739306363342e706e67',
    projectLink: 'https://social-media-69506.web.app/',
    githubLink: 'https://github.com/DucSkii/social-media-app',
    description: 'My social media app updates real time with a fully functional back-end. The website is also fully responsive and users can personalise their themes. Other features include options to follow users, like posts, comment, real-time chat between users.',
    time: '3 weeks',
    tech: 'React, Firebase, Material-UI'
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.Work}
    >
      <Grid container>
        <Grid item xs={12} className={classes.titleHeight} />
        <Grid container item xs={12} style={{ justifyContent: 'center' }}>
          <Typography
            variant='h2'
            color='primary'
            className={classes.letters}
            style={{
              cursor: 'default',
              userSelect: 'none',
            }}
          >
            {title.map((letter, index) => {
              if (letter === ' ') {
                return ' '
              }
              if (index === 0) {
                return (
                  <span className='a' key={index}>{letter}</span>
                )
              }
              return (
                <span className='a' key={index}>{letter}</span>
              )
            })}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.titleSeparator} />
        <Grid container item xs={12}>
          <Grid item xs={1} sm={3} md={2} />
          <Grid container item xs={10} sm={6} md={3} style={{ justifyContent: 'center' }}>
            <Typography>{shoppingProject.title}</Typography>
          </Grid>
          <Grid item xs={12} md={2} className={classes.hideProjectSeparator} />
          <Grid item xs={1} sm={3} className={classes.smallScreenSeparator} />
          <Grid container className={classes.hideTitle} item xs={10} sm={6} md={3} style={{ justifyContent: 'center' }}>
            <Typography>{socialMediaProject.title}</Typography>
          </Grid>
          <Grid item xs={1} sm={3} md={2} />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={1} sm={3} md={2} />
          <Grid container item xs={10} sm={6} md={3} style={{ justifyContent: 'center' }}>
            <Grid item xs={1} sm={3} className={classes.smallScreenSeparator} />
            <ProjectCard {...shoppingProject} />
          </Grid>
          <Grid item xs={12} md={2} className={classes.projectSeparator} />
          <Grid container item xs={12} className={classes.hide}>
            <Grid item xs={1} />
            <Grid container item xs={10} style={{ justifyContent: 'center' }}>
              <Typography>{socialMediaProject.title}</Typography>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid item xs={1} sm={3} className={classes.smallScreenSeparator} />
          <Grid container item xs={10} sm={6} md={3} style={{ justifyContent: 'center' }}>
            <ProjectCard {...socialMediaProject} />
          </Grid>
          <Grid item xs={1} sm={3} md={2} />
        </Grid>
        <Grid container item xs={12} className={classes.hideTitle}>
          <Grid item xs={1} sm={3} md={2} />
          <Grid container item xs={10} sm={6} md={3} style={{ justifyContent: 'center' }}>
            <Grid item xs={1} sm={3} className={classes.smallScreenSeparator} />
            <Typography>Tech: {shoppingProject.tech}</Typography>
          </Grid>
          <Grid item xs={12} md={2} className={classes.projectSeparator} />
          <Grid item xs={1} sm={3} className={classes.smallScreenSeparator} />
          <Grid container item xs={10} sm={6} md={3} style={{ justifyContent: 'center' }}>
            <Typography>Tech: {socialMediaProject.tech}</Typography>
          </Grid>
          <Grid item xs={1} sm={3} md={2} />
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Work