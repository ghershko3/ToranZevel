import React, { useContext } from 'react'
import { ToransContext } from '../Context.js/ToransProvider'
import { Button, FormControlLabel, Grid, Switch, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useFormik } from 'formik'

const useStyles = makeStyles({
    rowRoot: {
        margin: 0,
        width: '100%'
    },
})

const EditToran = ({ toran, onEditModeOff }) => {
    const { id, name, order, isInOffice, isOnShift } = toran
    const classes = useStyles()

    const { onUpdateToran } = useContext(ToransContext)

    const formik = useFormik({
        initialValues: {
            id,
            name,
            order,
            isInOffice,
            isOnShift,
        },
        onSubmit: (values, { resetForm }) => {
            onUpdateToran(values)
            resetForm()
            onEditModeOff()
        },
        enableReinitialize: true
    });

    return (
        <Grid container direction={'row'} alignItems={'center'} justify={'center'} spacing={3} className={classes.rowRoot}>
            <Grid item>
                <TextField
                    variant={'outlined'}
                    label={'שם'}
                    name={'name'}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    variant={'outlined'}
                    label={'מספר בתור'}
                    name={'order'}
                    value={formik.values.order}
                    onChange={formik.handleChange}
                />
            </Grid>
            <FormControlLabel
                value="isInOffice"
                checked={isInOffice}
                control={<Switch color="primary" />}
                label="Is in office"
                labelPlacement="start"
            />
            <Grid item>
                <Button onClick={formik.handleSubmit}>save</Button>
            </Grid>
        </Grid>
    )
}

export default EditToran
