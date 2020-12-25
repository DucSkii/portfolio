import React, { useState } from 'react'
import { Grid, Paper, Input, Button } from '@material-ui/core'

import { useStyles } from './styles'

const Form = () => {

  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const submit = e => {
    e.preventDefault()
    console.log('submitted')
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
                  className={classes.input}
                  value={name}
                  onChange={e => setName(e.target.value)}
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <Input
                  required
                  placeholder='Subject'
                  className={classes.input}
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <textarea
                  required
                  placeholder='Message'
                  className={classes.inputMessage}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
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