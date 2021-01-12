import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listTorans } from '../graphql/queries';
import Logo from '../Assets/Images/Logo.png'
import moment from 'moment'

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
    const [shifting, setShifting] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedShifting = await API.graphql(graphqlOperation(listTorans));
                console.log(fetchedShifting)
                setShifting(fetchedShifting.data.listTorans.items);
            } catch (error) {
                console.log("Error fetching shifting", error);
            }
        }

        fetchData()
    }, [])


    const sadakCount = shifting?.length
    const currentOrder = (moment().week() % sadakCount) + 1

    const currentAvilableToran = shifting?.find(toran => toran.order === currentOrder && !toran.isInOffice)
    const nextAvilableToran = shifting?.find(toran => (toran.order === ((currentOrder + 1) % sadakCount)) && !toran.isInOffice)
    const prevAvilableToran = shifting?.find(toran => (toran.order === ((currentOrder - 1) % sadakCount)) && !toran.isInOffice)

    return (
        <Grid container direction={'column'} justify={'center'} alignItems={'center'} className={classes.root}>
            <Grid item xs={12} container direction={'row'} justify={'center'} className={classes.logo}>
                <img src={Logo} height={400} />
            </Grid>

            <Grid item xs={12} sm={5} container direction={'row'} justify={'space-between'}>
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
            </Grid>

            <Grid item xs={12} container direction={'row'} justify={'center'}>
                <Typography variant={'h1'}>{currentAvilableToran?.name}</Typography>
            </Grid>
        </Grid>
    )
}

export default Main
