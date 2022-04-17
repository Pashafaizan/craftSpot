import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const currencies = [
  {
    label: 'Home Accessories',
    value: 'Home Accessories',
  },
  {
    label: 'Furniture',
    value: 'Furniture',
  },
  {
    label: 'Kitchen & Bar',
    value: 'Kitchen & Bar',
  },
  {
    label: 'Decorative Hardware',
    value: 'Decorative Hardware',
  },
  {
    label: 'Garden',
    value: 'Garden',
  },
    {
    label: 'Pets',
    value: 'Pets',
  },
    {
    label: 'Home Decor',
    value: 'Home Decor'
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '125ch',
      margin:0,
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency((p)=>event.target.value);
    props.setType(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
        
        <TextField
          id="outlined-select-currency-native"
          select
          label="Categories"
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
