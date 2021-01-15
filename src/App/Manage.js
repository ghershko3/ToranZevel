import React, { useContext, useState } from 'react'
import { ToransContext } from '../Context.js/ToransProvider'
import { Grid } from '@material-ui/core'
import SadakRow from './SadakRow'
import AddNewToran from './AddNewToran'
import EditToran from './EditToran'


const Manage = () => {
    const { shifting } = useContext(ToransContext)

    const [updatedToran, setUpdatedToran] = useState(undefined)

    const onEditModeOn = (toran) => { setUpdatedToran(toran) }
    const onEditModeOff = () => { setUpdatedToran(undefined) }

    return (
        <Grid container direction={'column'} alignItems={'center'} justify={'center'}>
            {shifting?.map(toran => (
                <SadakRow key={`sadak-row-${toran.id}`} toran={toran} onEditModeOn={onEditModeOn} />
            ))}

            <Grid item>
                {updatedToran ? <EditToran toran={updatedToran} onEditModeOff={onEditModeOff} /> : <AddNewToran />}
            </Grid>
        </Grid>
    )
}

export default Manage
