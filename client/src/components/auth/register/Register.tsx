import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { CircularProgress } from '@material-ui/core'
import {useStyles} from './style';
import http from '../HttpAuth'
import { useForm } from 'react-hook-form';


const Register = () => {
  const classes = useStyles({})
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [submitting, setSubmitting] = React.useState(false)
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = (date: any) => {
    http.register(date);
}

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper} elevation={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography component="h1" variant="h4" gutterBottom>
            Register
          </Typography>
        </Box>
        <form method="post" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            inputRef={register({ required: true})}
            label="First Name"
            name="firstName"
            autoComplete="fname"
            autoFocus
            defaultValue={formData.firstName}
            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            inputRef={register({ required: true})}
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            defaultValue={formData.lastName}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            inputRef={register({ pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
            label="Email Address"
            name="email"
            autoComplete="email"
            defaultValue={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            inputRef={register({ maxLength: 8 })}
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            defaultValue={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <Box mb={6}>
            <Button
              disabled={submitting}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {submitting && (
                <CircularProgress size={24} className={classes.buttonProgress} />
              )}
              {submitting ? 'Registering...' : 'Register'}
            </Button>
          </Box>
        </form>
      </Paper>
    </main>
  )
}

export default Register