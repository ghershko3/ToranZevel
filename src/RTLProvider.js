import React from "react";
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, makeStyles } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles({
    root: {
        height: '100%'
    }
})

const RTLProvider = (props) => {
    const { children } = props

    const classes = useStyles()

    return (
        <div dir='rtl' className={classes.root}>
            <StylesProvider jss={jss}>
                {children}
            </StylesProvider>
        </div>
    );
}

export default RTLProvider