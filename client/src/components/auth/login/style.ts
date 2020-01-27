import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles(theme => ({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(8),
            padding: `${theme.spacing(6)}px ${theme.spacing(4)}px`
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 3)
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
    }
}))