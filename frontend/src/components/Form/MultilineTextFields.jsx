import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const currencies = [
  {
    value: 'TOP',
    label: 'top',
  },
  {
    value: 'NEW',
    label: 'new',
  },
  {
    value: 'OTHER',
    label: 'other',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width:"100%"
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('OTHER');

  const handleChange = (event) => {
    setCurrency(event.target.value);
    props.setType(currency);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
        
        <TextField
          id="outlined-select-currency-native"
          select
          label="type"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
    </form>
  );
}
