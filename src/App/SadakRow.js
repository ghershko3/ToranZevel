import React from 'react'
import { Button, Grid, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    rowRoot: {
        margin: 0,
        width: '100%'
    },
})

const SadakRow = ({ toran, onEditModeOn }) => {
    const classes = useStyles()

    const onRowClick = () => {
        onEditModeOn(toran)
    }

    return (
        <Grid container direction={'row'} alignItems={'center'} justify={'center'} spacing={3} className={classes.rowRoot} >
            <Grid item>
               <IconButton onClick={onRowClick}><EditIcon /></IconButton>
            </Grid>
            <Grid item>
                <Typography>{toran.name}</Typography>
            </Grid>
            <Grid item>
                <Typography>{toran.order}</Typography>
            </Grid>

        </Grid>
    )
}

export default SadakRow
