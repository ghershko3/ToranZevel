import React, { useContext } from 'react'
import { ToransContext } from '../Context.js/ToransProvider'
import { Button, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useFormik } from 'formik'

const useStyles = makeStyles({
    rowRoot: {
        margin: 0,
        width: '100%'
    },
})

const AddNewToran = () => {
    const classes = useStyles()

    const { onAddToran } = useContext(ToransContext)


    const formik = useFormik({
        initialValues: {
            name: '',
            order: '',
            isInOffice: false,
            isOnShift: false,
        },
        onSubmit: (values, { resetForm }) => {
            onAddToran(values)
            resetForm()
        },
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
            <Grid item>
                <Button onClick={formik.handleSubmit}>save</Button>
            </Grid>
        </Grid>
    )
}

export default AddNewToran
