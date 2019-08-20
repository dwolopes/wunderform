import React, { memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  }));

const CustomInputComponent = ({ field, ...props }: any) => {
    const classes = useStyles();

    return (
        <div>
        <TextField
            {...field} 
            {...props}
            required
            id="filled-firstname-input"
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
        </div>
    )
};

export default memo(CustomInputComponent);