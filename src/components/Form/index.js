import React from 'react'
import { Grid, Paper, Input, Button } from '@material-ui/core'
import emailjs from 'emailjs-com'

import { useStyles } from './styles'

const Form = () => {

  const classes = useStyles()

  const submit = e => {
    e.preventDefault()
    emailjs.sendForm('gmail', 'template_ge555rk', e.target, 'user_yKZ9SB6Rxi2GVn3gfvGKA')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <div className={classes.Form}>
      <Paper style={{ backgroundColor: '#4960a9', padding: '15px' }}>
        <form onSubmit={submit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper>
                <Input
                  required
                  placeholder='Name'
                  type='text'
                  className={classes.input}
                  name='name'
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <Input
                  required
                  placeholder='Email'
                  type='email'
                  className={classes.input}
                  name='email'
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <Input
                  required
                  placeholder='Subject'
                  type='text'
                  className={classes.input}
                  name='subject'
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <textarea
                  required
                  placeholder='Message'
                  className={classes.inputMessage}
                  name='message'
                />
              </Paper>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='outlined' color='secondary' type='submit'>SEND</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  )
}

export default Form