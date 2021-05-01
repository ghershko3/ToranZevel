import React, { createContext, useEffect, useState } from 'react'
import _ from 'lodash'

export const ToransContext = createContext()

const ToransProvider = ({ children }) => {
    const [shifting, setShifting] = useState()

    const onAddToran = async (newToran) => {
        // try {
        //     const added = await API.graphql(graphqlOperation(createToran, { input: newToran }));
        //     setShifting(_.sortBy([...shifting, added.data.createToran], ['order']));
        // } catch (error) {
        //     console.log("Error on add Toran", error);
        // }
    }

    const onUpdateToran = async (updatedToran) => {
        // try {
        //     const updated = await API.graphql(graphqlOperation(updateToran, { input: updatedToran }));
        //     const updatedShifting = shifting.map(toran => toran.id == updatedToran.id ? updated.data.updateToran : toran)
        //     setShifting(_.sortBy(updatedShifting, ['order']));
        // } catch (error) {
        //     console.log("Error on add Toran", error);
        // }
    }

    useEffect(() => {
        const fetchData = async () => {
            // try {
            //     const fetchedShifting = await API.graphql(graphqlOperation(listTorans));
            //     setShifting(_.sortBy(fetchedShifting.data.listTorans.items, ['order']));
            // } catch (error) {
            //     console.log("Error fetching shifting", error);
            // }
        }

        fetchData()
    }, [])

    return (
        <ToransContext.Provider value={{ shifting, onAddToran, onUpdateToran }}>
            {children}
        </ToransContext.Provider>
    )
}

export default ToransProvider
