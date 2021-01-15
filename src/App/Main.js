import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import Logo from '../Assets/Images/Logo.png'
import moment from 'moment'
import { ToransContext } from '../Context.js/ToransProvider';
import Manage from './Manage';

const useStyles = makeStyles({
    root: {
        height: '100%',
    },
    logo: {
        backgroundColor: 'gray'
    }
})

const Main = () => {
    const classes = useStyles()

    const { shifting } = useContext(ToransContext)

    const sadakCount = shifting?.length

    const currentOrder = (moment().week() % sadakCount)
    const nextOrder = (moment().add(1, 'w').week() % sadakCount)
    const prevOrder = (moment().subtract(1, 'w').week() % sadakCount)

    const currentAvilableToran = currentOrder && shifting[currentOrder] 
    const nextAvilableToran = nextOrder && shifting[nextOrder]
    const prevAvilableToran = prevOrder && shifting[prevOrder]

    // useEffect(() => {
    //     console.log()
    // }, [])
    return (
        <Grid container direction={'column'} justify={'center'} alignItems={'center'} className={classes.root}>
            <Grid item xs={12} container direction={'row'} justify={'center'} className={classes.logo}>
                <img src={Logo} height={400} />
            </Grid>

            <Grid item xs={12} sm={5} container direction={'row'} justify={'space-between'}>
                <Grid item>
                    <Grid container direction={'column'} alignItems={'center'} justify={'center'}>
                        <Grid item>
                            <Typography variant={'h6'}>{'התורן הבא'}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h4'}>{nextAvilableToran?.name}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={'column'} alignItems={'center'} justify={'center'}>
                        <Grid item>
                            <Typography variant={'h6'}>{'התורן הקודם'}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h4'}>{prevAvilableToran?.name}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} container direction={'row'} justify={'center'}>
                <Grid container direction={'column'} alignItems={'center'} justify={'center'}>
                    <Grid item>
                        <Typography variant={'h6'}>{'הזוכה'}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h1'}>{currentAvilableToran?.name}</Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* <Grid item xs={12} container direction={'row'} justify={'center'}>
                <Manage />
            </Grid> */}
        </Grid>
    )
}

export default Main
