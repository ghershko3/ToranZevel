import React, { useContext, useState } from 'react'
import { ToransContext } from '../Context.js/ToransProvider'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    rowRoot: {
        margin: 0,
        width: '100%'
    },
})

const Manage = () => {
    const classes = useStyles()

    const { shifting, addToran } = useContext(ToransContext)

    const [newToranName, setNewToranName] = useState()
    const [newToranOrder, setNewToranOrder] = useState()

    const handleNameChange = (e) => { setNewToranName(e.target.value) }
    const handleOrderChange = (e) => { setNewToranOrder(e.target.value) }

    const handleSave = () => {
        if (newToranName && newToranOrder) {
            addToran({
                name: newToranName,
                order: newToranOrder,
                isInOffice: false,
                isOnShift: false
            })

            setNewToranName('')
            setNewToranOrder('')
        }
    }

    return (
        <Grid container direction={'column'} alignItems={'center'} justify={'center'}>
            {shifting?.map(toran => (
                <Grid container direction={'row'} alignItems={'center'} justify={'center'} spacing={3} className={classes.rowRoot}>
                    <Grid item>
                        <Typography>{toran.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{toran.order}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{toran.isOnShift}</Typography>
                    </Grid>
                </Grid>
            ))}

            <Grid item>
                <Grid container direction={'row'} alignItems={'center'} justify={'center'} spacing={3} className={classes.rowRoot}>
                    <Grid item>
                        <TextField
                            variant={'outlined'}
                            label="שם"
                            value={newToranName}
                            onChange={handleNameChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            variant={'outlined'}
                            label="מספר בתור"
                            value={newToranOrder}
                            onChange={handleOrderChange}
                        />
                    </Grid>
                    <Grid item>
                        <Button onClick={handleSave}>save</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Manage
