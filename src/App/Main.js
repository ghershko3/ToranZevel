import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Box, CircularProgress, Grid, Typography } from '@material-ui/core';
import Logo from '../Assets/Images/Logo.png'
import moment from 'moment'
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app'
import _ from 'lodash'

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

    const [fetchedTorans, loading, error] = useCollection(firebase.firestore().collection('torans'), { snapshotListenOptions: { includeMetadataChanges: true } });
    const torans = !loading && _.orderBy(fetchedTorans.docs.map(toran => toran.data()), 'order')


    const sadakCount = !loading && torans.length

    const currentIndexToBeToran = !loading && (moment().week() % sadakCount)
    const nextIndexToBeToran = !loading && (moment().add(1, 'w').week() % sadakCount)
    const prevIndexToBeToran = !loading && (moment().subtract(1, 'w').week() % sadakCount)

    const currentAvilableToran = !loading && torans[currentIndexToBeToran]
    const nextAvilableToran = !loading && torans[nextIndexToBeToran]
    const prevAvilableToran = !loading && torans[prevIndexToBeToran]

    return (
        loading
            ? <Box width={'100%'} display={'flex'} justifyContent={'center'}><CircularProgress /></Box>
            : error
                ? error
                : <Grid container direction={'column'} justify={'center'} alignItems={'center'} className={classes.root}>
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
