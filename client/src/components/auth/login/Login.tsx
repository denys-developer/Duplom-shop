import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import { useForm } from 'react-hook-form';
import http from '../HttpAuth'
import {useStyles} from './style';


interface AuthDate {
    email: String;
    password:String;
}

const Login = () => {
    const classes = useStyles({})

    const { register, handleSubmit, watch, errors } = useForm()
    const [formData, setFormData] = React.useState({ email: '', password: '' })
    const [submitting, setSubmitting] = React.useState(false)
    const onSubmit = (date: any) => {
        http.login(date);
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
                        Login
          </Typography>
                    <Typography component="p" gutterBottom>
                        Log in to your account dashboard
          </Typography>
                </Box>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        type="input"
                        inputRef={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        defaultValue={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                    <TextField
                        name="password"
                        inputRef={register({ required: true, maxLength: 8 })}
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="input"
                        id="password"
                        autoComplete="current-password"
                        defaultValue={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                    />
                    <Box mb={6}>
                        <Button
                            name="password"
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
                            {submitting ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </Box>
                </form>
            </Paper>
        </main>
    )
}

export default Login