import React, { useState } from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { motion } from 'framer-motion'
import { pageVariantHorizontal } from '../../utils/pageTransition'
import ProjectCard from '../../components/ProjectCard'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import spotifyIMG from '../../images/spotify.png'
import bookappIMG from '../../images/bookapp.png'
import ecommerceIMG from '../../images/ecommerceimg.png'
import socialmediaIMG from '../../images/socialmedia.png'
import kenzieIMG from '../../images/kenzie.png'
import enviIMG from '../../images/envi.png'

import { useStyles } from './styles'

const Work = () => {

  const classes = useStyles()

  const title = 'My Projects'.split('')

  const [page, setPage] = useState(1)
  const largeScreen = useMediaQuery('(min-width:578px)')

  const shoppingProject = {
    title: 'eCommerce Site',
    previewImg: ecommerceIMG,
    projectLink: 'https://shopping-cart-project-f7cf3.web.app/',
    githubLink: 'https://github.com/DucSkii/shopping-cart',
    description: 'THIS PROJECT IS NOT RESPONSIVE TO SMALL SCREEN DEVICES. My goal for the eCommerce site was to create a fast single page application that is quick and easy to navigate. Other features I had added were things like filters, option to favourite, scroll to top, pre-selected delivery options.',
    time: '2 weeks',
    tech: 'React',
  }

  const socialMediaProject = {
    title: 'Social Media App',
    previewImg: socialmediaIMG,
    projectLink: 'https://social-media-69506.web.app/',
    githubLink: 'https://github.com/DucSkii/social-media-app',
    description: 'My social media app updates real time with a fully functional back-end. The website is also fully responsive and users can personalise their themes. Other features include options to follow users, like posts, comment, real-time chat between users.',
    time: '3 weeks',
    tech: 'React, Firebase, Material-UI',
  }

  const spotifyCloneProject = {
    title: 'Spotify Clone',
    previewImg: spotifyIMG,
    projectLink: 'https://map-project-4763e.web.app/',
    githubLink: 'https://github.com/DucSkii/spotify-clone',
    description: '**MUST HAVE A REAL SPOTIFY ACCOUNT TO USE THIS APP**I made a clone of spotify. The goal of this project was to get as close as I could to the real thing, going down to the small details. The user can view playlists, tracks, artists and albums, they are also able to play audio.',
    time: '1 week',
    tech: 'React, Storybook, Spotify API',
  }

  const bookAppProject = {
    title: 'Book App',
    previewImg: bookappIMG,
    githubLink: 'https://github.com/DucSkii/react-native-bookapp',
    description: 'This app was styled using StyleSheet from react native. This is my first react native project, I was able to transfer my knowledge from react to create the app. This app does not have a lot of functionality and focuses on the layout and interactiveness of the app.',
    time: '4 days',
    tech: 'React Native',
  }

  const kenzieProject = {
    title: 'KenzieCreation',
    previewImg: kenzieIMG,
    projectLink: 'https://kenziecreation.com/',
    description: 'This is a freelance project in which I built a portfolio website for my client. I took the time to create a beautiful and sleek design which left my client satisfied.',
    time: '4 days',
    tech: 'WordPress'
  }

  const enviProject = {
    title: 'Envi Nails & Beauty',
    previewImg: enviIMG,
    projectLink: 'https://envinailsandbeauty.co.uk/',
    description: 'This is a freelance project in which I built the main site for the company Envi Nails & Beauty. I worked closely with the client in order to make sure the site represents who they are and fits the themes of the salon.',
    time: '6 days',
    tech: 'WordPress'
  }

  const projectArray = [shoppingProject, socialMediaProject, spotifyCloneProject, bookAppProject, kenzieProject, enviProject]

  const renderProjectCard = () => {
    if (largeScreen) {
      if (page === 1) {
        return projectArray.slice(0, 4).map((project, index) => {
          return (
            <Grid item container xs={8} sm={5} md={3} className={classes.projectCard} key={index}>
            <Grid item xs={12}>
              <Typography>{project.title}</Typography>
            </Grid>
            <Grid item container xs={12}>
              <ProjectCard {...project} />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.techText}>Tech: {project.tech}</Typography>
            </Grid>
          </Grid>
        )
      })
    } else {
      return projectArray.slice(4, 8).map((project, index) => {
        return (
          <Grid item container xs={8} sm={5} md={3} className={classes.projectCard} key={index}>
          <Grid item xs={12}>
            <Typography>{project.title}</Typography>
          </Grid>
          <Grid item container xs={12}>
            <ProjectCard {...project} />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.techText}>Tech: {project.tech}</Typography>
          </Grid>
        </Grid>
      )
    })
    }
    } else {
      if (page === 1) {
        return projectArray.slice(0, 2).map((project, index) => {
          return (
            <Grid item container xs={8} sm={5} md={3} className={classes.projectCard} key={index}>
              <Grid item xs={12}>
                <Typography>{project.title}</Typography>
              </Grid>
              <Grid item container xs={12}>
                <ProjectCard {...project} />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.techText}>Tech: {project.tech}</Typography>
              </Grid>
            </Grid>
          )
        })
      } else if (page === 2) {
        return projectArray.slice(2, 4).map((project, index) => {
          return (
            <Grid item container xs={8} sm={5} md={3} className={classes.projectCard} key={index}>
              <Grid item xs={12}>
                <Typography>{project.title}</Typography>
              </Grid>
              <Grid item container xs={12}>
                <ProjectCard {...project} />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.techText}>Tech: {project.tech}</Typography>
              </Grid>
            </Grid>
          )
        })
      }
      else {
        return projectArray.slice(4, 6).map((project, index) => {
          return (
            <Grid item container xs={8} sm={5} md={3} className={classes.projectCard} key={index}>
              <Grid item xs={12}>
                <Typography>{project.title}</Typography>
              </Grid>
              <Grid item container xs={12}>
                <ProjectCard {...project} />
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.techText}>Tech: {project.tech}</Typography>
              </Grid>
            </Grid>
          )
        })
      }
    }
  }

  const prevPage = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  const nextPage = () => {
    if (largeScreen) {
      if (page === 2) return
    } else {
      if (page === 3) return
    }
    setPage(page + 1)
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariantHorizontal}
      className={classes.Work}
    >
      <Grid container style={{ justifyContent: 'center' }}>
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
        <Grid
          item xs={12}
          className={classes.projectNav}
          style={{
            justifyContent: 'center', alignItems: 'center',
          }}
        >
          <IconButton onClick={() => prevPage()}>
            <ChevronLeftIcon />
          </IconButton>
          <Typography color='primary'>
            Page {page}
          </Typography>
          <IconButton onClick={() => nextPage()}>
            <ChevronRightIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} className={classes.titleSeparator} />
        <Grid container item xs={12} spacing={1} style={{ textAlign: 'center', justifyContent: 'space-evenly' }}>
          {renderProjectCard()}
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default Work