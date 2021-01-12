import React, { createContext, useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { listTorans } from '../graphql/queries';
import { createToran } from '../graphql/mutations';
import _ from 'lodash'

export const ToransContext = createContext()

const ToransProvider = ({ children }) => {
    const [shifting, setShifting] = useState()

    const addToran = async (newToran) => {
        try {
            await API.graphql(graphqlOperation(createToran, {input: newToran}));
            setShifting(_.sortBy([...shifting, newToran], ['order']));
        } catch (error) {
            console.log("Error on add Toran", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedShifting = await API.graphql(graphqlOperation(listTorans));
                setShifting(_.sortBy(fetchedShifting.data.listTorans.items, ['order']));
            } catch (error) {
                console.log("Error fetching shifting", error);
            }
        }

        fetchData()
    }, [])

    return (
        <ToransContext.Provider value={{shifting, addToran}}>
            {children}
        </ToransContext.Provider>
    )
}

export default ToransProvider
