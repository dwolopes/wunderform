import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
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

const CustomInputComponent = ({ field, required, form: { touched, errors }, form, ...props }: any) => {
    const classes = useStyles();
    
    return (
        <div>
        <TextField
            error = { touched[field.name] && errors[field.name]}
            {...field} 
            {...props}
            className={classes.textField}
            margin="normal"
            variant="filled"
            required={required}
          />
        </div>
    )
};

export default memo(CustomInputComponent);