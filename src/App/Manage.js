import React, { useState } from 'react'
import { CircularProgress, Grid, Box } from '@material-ui/core'
import SadakRow from './SadakRow'
import AddNewToran from './AddNewToran'
import EditToran from './EditToran'
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app'


const Manage = () => {
    // const { shifting } = useContext(ToransContext)

    const [torans, loading, error] = useCollection(firebase.firestore().collection('torans'), { snapshotListenOptions: { includeMetadataChanges: true } });

    const [updatedToran, setUpdatedToran] = useState(undefined)

    const onEditModeOn = (toran) => { setUpdatedToran(toran) }
    const onEditModeOff = () => { setUpdatedToran(undefined) }


    // torans.docs.map(toran => toran.data())

    return (

        loading
            ? <Box width={'100%'} display={'flex'} ailginItems={'center'}><CircularProgress /></Box>
            : error
                ? <div>error</div>
                : <Grid container direction={'column'} alignItems={'center'} justify={'center'}>
                    {torans.docs.map(toran => (
                        <SadakRow key={`sadak-row-${toran.data().id}`} toran={toran.data()} onEditModeOn={onEditModeOn} />
                    ))}

                    <Grid item>
                        {updatedToran ? <EditToran toran={updatedToran} onEditModeOff={onEditModeOff} /> : <AddNewToran />}
                    </Grid>
                </Grid>
    )
}

export default Manage
