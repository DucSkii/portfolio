import React, { useState, useEffect } from 'react'
import { Typography, Modal } from '@material-ui/core'

import { useStyles } from './styles'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: '80%',
    outline: '0',
    border: '0',
  }
}

const ProjectCard = ({ previewImg, projectLink, githubLink, description, time, tech, title, account }) => {

  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [hovered, setHovered] = useState(false)
  const [style, setStyle] = useState({})
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (hovered === true) {
      setStyle({ backgroundColor: 'transparent' })
    } else {
      setStyle({})
    }
  }, [hovered])

  return (
    <div className={classes.ProjectCard}>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.modal}>
          <img src={previewImg}
            alt='preview img'
            style={{ objectFit: 'contain', width: '50%' }}
          />
          <div className={classes.description}>
            <div className={classes.links}>
              <Typography className={classes.linksText}>
                Link to project: <a style={{ color: '#707cc3' }} href={projectLink} target="_blank" rel="noopener noreferrer">{projectLink}</a>
              </Typography>
              <Typography className={classes.linksText}>
                Link to GitHub repository: <a style={{ color: '#707cc3' }} href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a>
              </Typography>
            </div>
            <div style={{ marginTop: '30px' }}>
              <Typography className={classes.descriptionText} style={{ fontWeight: 'bold' }}>
                {title}
              </Typography>
            </div>
            {account ? (
              <Typography style={{ fontFamily: 'Roboto' }}>
                DUMMY ACCOUNT (Email:Password) : {account}
              </Typography>
            ) : null}
            <div className={classes.descriptionGap}>
              <Typography className={classes.descriptionText}>
                {description}
              </Typography>
            </div>
            <div style={{ marginTop: '10px' }}>
              <Typography className={classes.descriptionText} style={{ fontWeight: 'bold' }}>
                Tech: {tech}
              </Typography>
            </div>
            <div style={{ marginTop: '10px' }}>
              <Typography className={classes.descriptionText} style={{ fontWeight: 'bold' }}>
                Project Length: {time}
              </Typography>
            </div>
          </div>
        </div>
      </Modal>
      <div className={classes.cover}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen(true)}
      >
        <div className={classes.filter} style={style} />
        <div className={classes.viewButton}>
          <Typography color='primary' style={{ textAlign: 'center', userSelect: 'none' }}>
            View Project
          </Typography>
        </div>
      </div>
      <img src={previewImg}
        alt='preview img'
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default ProjectCard